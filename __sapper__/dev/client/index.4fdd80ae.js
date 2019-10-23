import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, g as claim_space, c as claim_element, b as children, p as claim_text, f as detach_dev, h as attr_dev, j as add_location, k as insert_dev, m as append_dev, n as noop } from './index.ec386080.js';

/* src/routes/index.svelte generated by Svelte v3.12.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, div, h1, t1, t2, p0, t3, t4, p1, t5, t6, p2, t7, t8, p3, t9, br, t10, t11, p4, t12, t13, p5, t14;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text("👋 Hello friend 👋");
			t2 = space();
			p0 = element("p");
			t3 = text("🇫🇷 French and german 🇩🇪 developer here ! 🤖");
			t4 = space();
			p1 = element("p");
			t5 = text("🎓I did a Higher National Diploma in International Business in sandwich\n    courses.");
			t6 = space();
			p2 = element("p");
			t7 = text("💡I could develop competences like customer relationship, project management\n    and team bulding");
			t8 = space();
			p3 = element("p");
			t9 = text("💻 I wanted to increase my competences so I followed an intensive training\n    to be a fullstack javascript web developer.\n    ");
			br = element("br");
			t10 = text("\n    🎓 I challenged myself to learn to develop and I'm now diplomed of a\n    Associate Degree in Software Development.");
			t11 = space();
			p4 = element("p");
			t12 = text("⌨️ Now I apply those competences in an agile work environment based on open\n    communication, kindness, learning to perform.");
			t13 = space();
			p5 = element("p");
			t14 = text("🗝 I currently learn a lot by myself about computer science and related\n    topics especially cybersecurity.");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_space(nodes);

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			h1 = claim_element(div_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "👋 Hello friend 👋");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);

			p0 = claim_element(div_nodes, "P", {}, false);
			var p0_nodes = children(p0);

			t3 = claim_text(p0_nodes, "🇫🇷 French and german 🇩🇪 developer here ! 🤖");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);

			p1 = claim_element(div_nodes, "P", {}, false);
			var p1_nodes = children(p1);

			t5 = claim_text(p1_nodes, "🎓I did a Higher National Diploma in International Business in sandwich\n    courses.");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);

			p2 = claim_element(div_nodes, "P", {}, false);
			var p2_nodes = children(p2);

			t7 = claim_text(p2_nodes, "💡I could develop competences like customer relationship, project management\n    and team bulding");
			p2_nodes.forEach(detach_dev);
			t8 = claim_space(div_nodes);

			p3 = claim_element(div_nodes, "P", {}, false);
			var p3_nodes = children(p3);

			t9 = claim_text(p3_nodes, "💻 I wanted to increase my competences so I followed an intensive training\n    to be a fullstack javascript web developer.\n    ");

			br = claim_element(p3_nodes, "BR", {}, false);
			var br_nodes = children(br);

			br_nodes.forEach(detach_dev);
			t10 = claim_text(p3_nodes, "\n    🎓 I challenged myself to learn to develop and I'm now diplomed of a\n    Associate Degree in Software Development.");
			p3_nodes.forEach(detach_dev);
			t11 = claim_space(div_nodes);

			p4 = claim_element(div_nodes, "P", {}, false);
			var p4_nodes = children(p4);

			t12 = claim_text(p4_nodes, "⌨️ Now I apply those competences in an agile work environment based on open\n    communication, kindness, learning to perform.");
			p4_nodes.forEach(detach_dev);
			t13 = claim_space(div_nodes);

			p5 = claim_element(div_nodes, "P", {}, false);
			var p5_nodes = children(p5);

			t14 = claim_text(p5_nodes, "🗝 I currently learn a lot by myself about computer science and related\n    topics especially cybersecurity.");
			p5_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			document.title = "Alex Lab";
			attr_dev(h1, "class", "svelte-1rnbboz");
			add_location(h1, file, 17, 2, 216);
			add_location(p0, file, 18, 2, 246);
			add_location(p1, file, 19, 2, 303);
			add_location(p2, file, 23, 2, 405);
			add_location(br, file, 30, 4, 655);
			add_location(p3, file, 27, 2, 520);
			add_location(p4, file, 34, 2, 790);
			add_location(p5, file, 38, 2, 933);
			attr_dev(div, "class", "wrapper svelte-1rnbboz");
			add_location(div, file, 16, 0, 192);
		},

		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t1);
			append_dev(div, t2);
			append_dev(div, p0);
			append_dev(p0, t3);
			append_dev(div, t4);
			append_dev(div, p1);
			append_dev(p1, t5);
			append_dev(div, t6);
			append_dev(div, p2);
			append_dev(p2, t7);
			append_dev(div, t8);
			append_dev(div, p3);
			append_dev(p3, t9);
			append_dev(p3, br);
			append_dev(p3, t10);
			append_dev(div, t11);
			append_dev(div, p4);
			append_dev(p4, t12);
			append_dev(div, t13);
			append_dev(div, p5);
			append_dev(p5, t14);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t0);
				detach_dev(div);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });
	}
}

export default Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGZkZDgwYWUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=