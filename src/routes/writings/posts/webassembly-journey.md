---
title: A Journey into WebAssembly
summary: A Journey into WebAssembly
date: 2020-06-02
---

## What is WASM

WebAssembly is a low level assembly-like language which provides a compilation target for languages so that they can run on the web.
It's an open standard inside the W3C WebAssembly Community Group.

## Goals

- **Fast, efficient and portable**: take advantage of common hardware capabilities
- **Readable and debuggable**: have a human-readable text format
- **Secure**: run in a sandbox and enforce the browser's same-origin and permissions policies
- **Don't break the web**: Designed to work with other web technologies and maintains backwards compatibility

## Why WASM

Slow performances when using JavaScript with 3D Games, VR VA, computer vision, image editing...

High cost of download parsing and compiling very large JS applications (can be a problem with slow internet connections and not high performant devices)

## Integration with the web platfom

### How does it work

The web plaform:
A VM runs the web app's code (the JS code that powers the app)

A set of **Web APIs** (DOM CSSDOM WebGl, IndexedDB...) is available to have more features.

The WASM code is executed in a new VM alongside the JS VM. This VM exports WASM code wrapped by the WebAssembly Javascript API so we use Javascript functions to call WebAssembly in our application.

JS has complete control over how WASM code is downloaded, compiled and ran; it's like a JS feature for efficiently generating high performance functions.

The **WebAssembly module** can also import and synchronously call Javascript functions.

## Key concepts

- **Module**: A stateless binary, declares imports and exports

- **Memory**: A resizable ArrayBuffer where you can write and read with WASM low-level memory access instructions and is shared between WASM and JS

- **Table**: A resizable typed array of references (for the moment only to functions) that is accessible and mutable from JS and WASM (for safety and portability reasons)

- **Instance**: A Module paired with all the state it uses at runtime including a Memory, Table, and set of imported values. An Instance is like an ES2015 module that has been loaded into a particular global with a particular set of imports.

### Available languages

16 stable languages suitable for a production usage: .Net, C#, C, C++, Go, Rust, AssemblyScript...

20 unstable but usabl: PHP, Python, Javascript, Ruby, Java, Kotlin/Native, ...

11 WIP: Ocaml, Haskell,...

## Demo time

WebAssembly uses `.wasm` files but also provide a readable assembly-like file format, the `.wat` files. [You can see one here](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/simple.wat).

### The calculator

I started by doing a [simple calculator](https://alexlab.me/experiments/wasm-calculator) based on a tutorial.

It's how I understood how it works.

As you can see, I'm using a `go` file. that you can find on the [repository here](https://github.com/imalexlab/alexlab/blob/master/src/routes/experiments/wasm-calculator/_wasm/main.go).

Let's decompose it.

Fist as a Go file, you give the file a name to the package, here "main".

```go
package main
```

After that, you have your imports, here `"fmt"` (formatted I/O) used to print to the console that "WASM Go Initialized". The we import `"syscall/js"`, the js package that gives access to the WebAssembly host environment.

```go
import (
  "fmt"
  "syscall/js"
)
```

We have after 4 functions (`func` in Go). Let's focus first on the `main` function.

```go
func main() {
  c := make(chan struct{}, 0)

  fmt.Println("WASM Go Initialized")
  // register functions
  registerCallbacks()
  <-c
}
```

The line `c := make(chan struct{}, 0)` will create a channel, allowing us to create a long-running program. If we didn't do that, the program would register the callbacks and immediatly finish.

Then we print `fmt.Println("WASM Go Initialized")`. It's just a little check to see if our WASM file is correctly loaded.

We then call the function `registerCallbacks`, let's see what is this function.

```go
func registerCallbacks() {
  emptyWASMObject := make(map[string]interface{})
  js.Global().Set("WASMGo", js.ValueOf(emptyWASMObject))
  js.Global().Get("WASMGo").Set("add", js.FuncOf(add))
  js.Global().Get("WASMGo").Set("subtract", js.FuncOf(subtract))
}
```

First line will allow us to create an empty object in Javascript. `map[string]interface{}` is the equivalent of a Javascript object. We will add it to our `global` object in javascript under the key `WASMGo`. This implementation avoid overriding existings objects in the Javascript `global` object. All our functions will be available under the `WASMGo` object.

Next we set of function `add` and `subtract` to our `WASMGO` object. Let's see what they do.

```go
func add(this js.Value, i []js.Value) interface{} {
  return js.ValueOf(i[0].Int() + i[1].Int())
}

func subtract(this js.Value, i []js.Value) interface{} {
  return js.ValueOf(i[0].Int() - i[1].Int())
}
```

Ok, you see that both are similar so we will only see the `add` function.

The `add` function get two parameters, `this` a `js.Value` equivalent to a Javascript value and `i` and array of `js.Value`.

The `this` is our `this` in Javascript.

We want to return a Javascript value. This value will be the addition of our two elements in our array (we are making them integers to add them).

But wait, where do you pass the numbers?

Well now that we have our WebAssembly file (you can compile your Go file with this command `GOOS=js GOARCH=wasm go build -o lib.wasm` or your favorite compiler).

Go has features that you don't have in your browser, like the file system. But what if we use it or a library we are using use it?

Well, we have to mock them. Don't worry! Awesome people already did it, here come the `wasm_exec.js` file. [You can see how to retrieve it here.](https://github.com/golang/go/wiki/WebAssembly#getting-started)

You want to load this file like a normal JS file. You have now to initialize the WebAssembly stream by creating a connection with the WebAssembly VM (remember from `How does it work` part) and fetching our file.

[You can see how I did here in my `svelte` file.](https://github.com/imalexlab/alexlab/blob/master/src/routes/experiments/wasm-calculator/index.svelte)

When the `wasm` file is downloaded and the WASM VM connected you can see in your console: "WASM Go Initialized". You know can see in the console, we have a `WASMGo` object in our `global` object.

So know it's just pure Javascript:

```javascript
function addValues() {
  const result = WASMGo.add(1, 2);
}
```

This will return `3`. You can now plug it to your component like a simple function.

### The Identicon Generator

After following a tutorial, I wanted to do something more useful and try to add an already existing Go library to my project.

I went threw the awesome-golang repo and searched for something not to hard to use as my Go knowledge is very basic but fun.

I found this library, [An avatar generator in Go](https://github.com/aofei/cameron).

[So I created an Identicon generator.](https://alexlab.me/experiments/wasm-identicon/)

[You can find my Go implementation here.](https://github.com/imalexlab/alexlab/blob/master/src/routes/experiments/wasm-identicon/_wasm/main.go)

I will not explain everything as it's almost the same as the calculator.

You can see our new function `identicon`.

```go

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
```

Ok. Like for our `add` function, we get from the second parameter the values we are passing in our JS function. Here we pass a string and save it in a very bad named variable `array`.

Next, we use the `cameron` library with the function to generate and Identicon with our value.

The we want to create a JPEG file of it so we need to create a buffer. We encore our imgIcon to our buffer.

To create an image of that in our Javascript, we have to create a Uint8Array of the length of the buffer (transformed into Bytes). See that like creating a box for the Javascript that we can then put our image in it.

Finally, we copy our image in our `dst`, we put our image in the box to ship to Javascript and return it.

What are we doing in ou JS file ?

Let's have a look.

```javascript
function loadIcon() {
  const buf = WASMGo.identicon('Hello');
  const blob = new Blob([buf], {
    type: 'png',
  });
  const imgUrl = URL.createObjectURL(blob);
  const ourImage = document.getElementById('image');
  ourImage.setAttribute('src', imgUrl);
}
```

We know that the first line do, calling our WASM function with the parameter "Hello".

The response is now our Uint8Array and we create a blob of it with the type `png`.

We can now create or URL for our image from our blob and add it to `ourImage`, the `<img>` element.

### The extension

After that I wanted to know if it was possible to do it in a browser extension. Like for the Identicon generator, I used a library to prettify the JSON.

[You can find the extension here fore firefox.](https://github.com/imalexlab/Pretty-JSON)

For the moment I compile my Go code with the main Go compiler. However it's shipping a lot of unecessary code. So here come TinyGo. This compiler made me reduce my extension from **638.25 KB** to **244.84 KB**!

Everything isn't ready yet in TinyGo but if you are stuck feel free to create an issue on their repository and check their website!

## But what about not Go?

I didn't try other languages than Go but I assume it will be pretty much the same as Go.

You connect to the WASM VM, fetch your file, call functions.

[You can see examples here in C and Rust](https://webassembly.studio/)

## Performances

Javascript may be faster for little arrays because you don't have to call an other file and do the function call and wait for an output.

However, WebAssembly is faster on heavy calculation. So you should definitly take a look on WebAssembly if you are doing big operation and/or you are creating a big application.

Native code is faster WebAssembly as you don't have to emulate functionalities on Native

## Cons

It's complex to get in as it's still new and the ecosystem pretty small. I can't tell you how happy I was at 3am when I saw the first Identicon on my screen (as mentionned before, I'm pretty new in Go so it was an other layer of difficulty).

There is no new security flaws as it's sandboxed and can do only what the Javascript can do. However, current JS exploits can be rewritten in WASM, making it harder to catch.

## Future

It will be possible to call WebAPIs directly from your WASM files so you don't have to use a Javascript bridge, making it even faster!

It will be possible to load WASM Modules like ES2015 modules (using `<script type='module'>`)

WebAssembly will not be only on the browser but also on backend, cloud, IOT! Solutions for this already exists! You can find an article here on [WASI](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/) and [here a conference about WebAssembly for IOT from the WebAssembly 2020 Summit](https://www.youtube.com/watch?v=oky3FdsTuUM)

## Conclusion

Thanks for reading this! It was big journey for me from 0 to 1 in WebAssembly so I hope this article helped you.

My apoligize for mistakes hidden in my code or in this article, this was all for personal projects so it's not tested, may not use any code standarts but a great way to learn!

If you have any questions, feel free to contact me on my Twitter!

## Links

Here are more links that helped me for this presentation and when coding.

https://github.com/appcypher/awesome-wasm-langs
https://developer.mozilla.org/en-US/docs/WebAssembly
https://webassembly.org/
https://webassembly.studio/
https://github.com/mdn/webassembly-examples/tree/master/js-api-examples
https://medium.com/@torch2424/webassembly-is-fast-a-real-world-benchmark-of-webassembly-vs-es6-d85a23f8e193
https://www.usenix.org/system/files/atc19-jangda.pdf
