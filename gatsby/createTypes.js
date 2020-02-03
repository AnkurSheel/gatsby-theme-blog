const createPageType = actions => {
    actions.createTypes(`
    type Page implements Node @dontInfer{
      id: ID!
      title: String!
      draft: Boolean
      path: String!
      body: String!
      featuredImage: File @fileByRelativePath
      featuredImagePosition: String
    }`);
};

const createPostType = actions => {
    actions.createTypes(`
    type Post implements Node @dontInfer {
        id: ID!
        title: String!
        path: String!
        excerpt: String!
        date: Date! @dateformat(formatString: "YYYY-MM-DD")
        body:String!
        tags: [String!]!
        timeToRead: Int!
        draft: Boolean
        featuredImage: File @fileByRelativePath
        featuredImagePosition: String
        imageFacebook: File! @fileByRelativePath
        imageTwitter: File! @fileByRelativePath
    }`);
};

exports.createPageType = createPageType;
exports.createPostType = createPostType;
