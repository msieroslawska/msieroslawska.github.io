declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"data-types.md": {
	id: "data-types.md";
  slug: "data-types";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"html-semantic-elements.md": {
	id: "html-semantic-elements.md";
  slug: "html-semantic-elements";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"html5-tags.md": {
	id: "html5-tags.md";
  slug: "html5-tags";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"specificity.md": {
	id: "specificity.md";
  slug: "specificity";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"variables.md": {
	id: "variables.md";
  slug: "variables";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};
"blog": {
"2020-07-20.md": {
	id: "2020-07-20.md";
  slug: "2020-07-20";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020-07-24.md": {
	id: "2020-07-24.md";
  slug: "2020-07-24";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020-08-31.md": {
	id: "2020-08-31.md";
  slug: "2020-08-31";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2020-11-13.md": {
	id: "2020-11-13.md";
  slug: "2020-11-13";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"codeLogs": {
"2019-04-16.md": {
	id: "2019-04-16.md";
  slug: "2019-04-16";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-17.md": {
	id: "2019-04-17.md";
  slug: "2019-04-17";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-18.md": {
	id: "2019-04-18.md";
  slug: "2019-04-18";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-19.md": {
	id: "2019-04-19.md";
  slug: "2019-04-19";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-21.md": {
	id: "2019-04-21.md";
  slug: "2019-04-21";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-22.md": {
	id: "2019-04-22.md";
  slug: "2019-04-22";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-23.md": {
	id: "2019-04-23.md";
  slug: "2019-04-23";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-24.md": {
	id: "2019-04-24.md";
  slug: "2019-04-24";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-27.md": {
	id: "2019-04-27.md";
  slug: "2019-04-27";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-29.md": {
	id: "2019-04-29.md";
  slug: "2019-04-29";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-04-30.md": {
	id: "2019-04-30.md";
  slug: "2019-04-30";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-02.md": {
	id: "2019-05-02.md";
  slug: "2019-05-02";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-03.md": {
	id: "2019-05-03.md";
  slug: "2019-05-03";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-04.md": {
	id: "2019-05-04.md";
  slug: "2019-05-04";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-06.md": {
	id: "2019-05-06.md";
  slug: "2019-05-06";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-07.md": {
	id: "2019-05-07.md";
  slug: "2019-05-07";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-08.md": {
	id: "2019-05-08.md";
  slug: "2019-05-08";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-09.md": {
	id: "2019-05-09.md";
  slug: "2019-05-09";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-10.md": {
	id: "2019-05-10.md";
  slug: "2019-05-10";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-13.md": {
	id: "2019-05-13.md";
  slug: "2019-05-13";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-14.md": {
	id: "2019-05-14.md";
  slug: "2019-05-14";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-15.md": {
	id: "2019-05-15.md";
  slug: "2019-05-15";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-17.md": {
	id: "2019-05-17.md";
  slug: "2019-05-17";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-20.md": {
	id: "2019-05-20.md";
  slug: "2019-05-20";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-21.md": {
	id: "2019-05-21.md";
  slug: "2019-05-21";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-23.md": {
	id: "2019-05-23.md";
  slug: "2019-05-23";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-27.md": {
	id: "2019-05-27.md";
  slug: "2019-05-27";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-28.md": {
	id: "2019-05-28.md";
  slug: "2019-05-28";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-29.md": {
	id: "2019-05-29.md";
  slug: "2019-05-29";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-30.md": {
	id: "2019-05-30.md";
  slug: "2019-05-30";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-05-31.md": {
	id: "2019-05-31.md";
  slug: "2019-05-31";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-02.md": {
	id: "2019-06-02.md";
  slug: "2019-06-02";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-03.md": {
	id: "2019-06-03.md";
  slug: "2019-06-03";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-04.md": {
	id: "2019-06-04.md";
  slug: "2019-06-04";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-05.md": {
	id: "2019-06-05.md";
  slug: "2019-06-05";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-07.md": {
	id: "2019-06-07.md";
  slug: "2019-06-07";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-11.md": {
	id: "2019-06-11.md";
  slug: "2019-06-11";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-12.md": {
	id: "2019-06-12.md";
  slug: "2019-06-12";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-13.md": {
	id: "2019-06-13.md";
  slug: "2019-06-13";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-17.md": {
	id: "2019-06-17.md";
  slug: "2019-06-17";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-20.md": {
	id: "2019-06-20.md";
  slug: "2019-06-20";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-06-26.md": {
	id: "2019-06-26.md";
  slug: "2019-06-26";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-07-02.md": {
	id: "2019-07-02.md";
  slug: "2019-07-02";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-07-03.md": {
	id: "2019-07-03.md";
  slug: "2019-07-03";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
"2019-07-08.md": {
	id: "2019-07-08.md";
  slug: "2019-07-08";
  body: string;
  collection: "codeLogs";
  data: InferEntrySchema<"codeLogs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
