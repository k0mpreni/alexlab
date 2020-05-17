package main

import (
	"bytes"
	"image/jpeg"
	_ "image/jpeg"
	_ "image/png"
	"syscall/js"

	"github.com/aofei/cameron"
)

func identicon(this js.Value, i []js.Value) interface{} {
	array := i[0].String()

	imgIcon := cameron.Identicon(
		[]byte(array),
		540,
		60,
	)
	buf := bytes.Buffer{}
	jpeg.Encode(
		&buf,
		imgIcon,
		&jpeg.Options{
			Quality: 100,
		},
	)

	dst := js.Global().Get("Uint8Array").New(len(buf.Bytes()))
	js.CopyBytesToJS(dst, buf.Bytes())

	return dst
}

func registerCallbacks() {
	emptyWASMObject := make(map[string]interface{})
	js.Global().Set("WASMGo", js.ValueOf(emptyWASMObject))
	js.Global().Get("WASMGo").Set("identicon", js.FuncOf(identicon))
}

func main() {
	c := make(chan struct{}, 0)

	println("WASM Go Initialized")

	registerCallbacks()
	<-c
}
