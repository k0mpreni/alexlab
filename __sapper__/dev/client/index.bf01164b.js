import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, e as element, t as text, a as space, c as claim_element, b as children, p as claim_text, f as detach_dev, g as claim_space, h as attr_dev, j as add_location, k as insert_dev, m as append_dev, G as set_data_dev, n as noop, O as destroy_each } from './index.df878908.js';

/* src/routes/writings/index.svelte generated by Svelte v3.12.1 */

const file = "src/routes/writings/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.post = list[i];
	return child_ctx;
}

// (31:2) {#each posts as post}
function create_each_block(ctx) {
	var li, a, t0_value = ctx.post.title + "", t0, a_href_value, t1;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {}, false);
			var li_nodes = children(li);

			a = claim_element(li_nodes, "A", { rel: true, href: true, target: true }, false);
			var a_nodes = children(a);

			t0 = claim_text(a_nodes, t0_value);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(a, "rel", "prefetch noopener noreferrer");
			attr_dev(a, "href", a_href_value = ctx.post.link ? ctx.post.link : 'writings/' + ctx.post.slug);
			attr_dev(a, "target", "_blank");
			add_location(a, file, 36, 6, 671);
			add_location(li, file, 35, 4, 660);
		},

		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t0);
			append_dev(li, t1);
		},

		p: function update(changed, ctx) {
			if ((changed.posts) && t0_value !== (t0_value = ctx.post.title + "")) {
				set_data_dev(t0, t0_value);
			}

			if ((changed.posts) && a_href_value !== (a_href_value = ctx.post.link ? ctx.post.link : 'writings/' + ctx.post.slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(li);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block.name, type: "each", source: "(31:2) {#each posts as post}", ctx });
	return block;
}

function create_fragment(ctx) {
	var t0, div, h1, t1, t2, ul;

	let each_value = ctx.posts;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text("Writings");
			t2 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_space(nodes);

			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			h1 = claim_element(div_nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Writings");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);

			ul = claim_element(div_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			document.title = "Writings";
			add_location(h1, file, 27, 0, 390);
			attr_dev(ul, "class", "svelte-1uzksw3");
			add_location(ul, file, 29, 0, 409);
			add_location(div, file, 25, 0, 383);
		},

		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t1);
			append_dev(div, t2);
			append_dev(div, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.posts) {
				each_value = ctx.posts;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t0);
				detach_dev(div);
			}

			destroy_each(each_blocks, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function preload({ params, query }) {
  return this.fetch(`writings.json`)
    .then(r => r.json())
    .then(posts => {
      return { posts };
    });
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;

	const writable_props = ['posts'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Index> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
	};

	$$self.$capture_state = () => {
		return { posts };
	};

	$$self.$inject_state = $$props => {
		if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
	};

	return { posts };
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["posts"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.posts === undefined && !('posts' in props)) {
			console.warn("<Index> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Index;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYmYwMTE2NGIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvd3JpdGluZ3MvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuICAgIHJldHVybiB0aGlzLmZldGNoKGB3cml0aW5ncy5qc29uYClcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihwb3N0cyA9PiB7XG4gICAgICAgIHJldHVybiB7IHBvc3RzIH07XG4gICAgICB9KTtcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgcG9zdHM7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICB1bCB7XG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+V3JpdGluZ3M8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdj5cblxuPGgxPldyaXRpbmdzPC9oMT5cblxuPHVsPlxuICB7I2VhY2ggcG9zdHMgYXMgcG9zdH1cbiAgICA8IS0tIHdlJ3JlIHVzaW5nIHRoZSBub24tc3RhbmRhcmQgYHJlbD1wcmVmZXRjaGAgYXR0cmlidXRlIHRvXG5cdFx0XHRcdHRlbGwgU2FwcGVyIHRvIGxvYWQgdGhlIGRhdGEgZm9yIHRoZSBwYWdlIGFzIHNvb24gYXNcblx0XHRcdFx0dGhlIHVzZXIgaG92ZXJzIG92ZXIgdGhlIGxpbmsgb3IgdGFwcyBpdCwgaW5zdGVhZCBvZlxuXHRcdFx0XHR3YWl0aW5nIGZvciB0aGUgJ2NsaWNrJyBldmVudCAtLT5cbiAgICA8bGk+XG4gICAgICA8YVxuICAgICAgICByZWw9XCJwcmVmZXRjaCBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgaHJlZj17cG9zdC5saW5rID8gcG9zdC5saW5rIDogJ3dyaXRpbmdzLycgKyBwb3N0LnNsdWd9XG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuICB7L2VhY2h9XG48L3VsPlxuXG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7MkJBd0NTLElBQUksQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRkwsSUFBSSxDQUFDLElBQUksT0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsT0FBRyxJQUFJLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7dURBRXBELElBQUksQ0FBQyxLQUFLOzs7OytEQUZMLElBQUksQ0FBQyxJQUFJLE9BQUcsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLE9BQUcsSUFBSSxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFScEQsS0FBSzs7OztnQ0FBVjs7Ozs7Ozs7Ozs7OzttQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FBQTs7Ozs7OztxQkFBSyxLQUFLOzs7K0JBQVY7Ozs7Ozs7Ozs7OzsyQkFBQTs7O2dCQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTdCSyxTQUFTLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtFQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNuQixJQUFJLENBQUMsS0FBSyxJQUFJO01BQ2IsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ2xCLENBQUMsQ0FBQztDQUNOOzs7Q0FJTSxNQUFJLGlCQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9