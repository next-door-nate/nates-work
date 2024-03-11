export default function linkResolver(doc) {
  if (typeof doc === "string") {
    return doc;
  } else {
    let slug = doc.slug.current;

    switch (doc._type) {
      case "project":
        return "/projects/" + slug;
      case "blog":
        return "/writing/" + slug;
      case "category":
        return "/blog/category/" + slug;
    }

    return "/" + slug;
  }
}
