const createBodyResolver = () => {
    return (source, args, context, info) => {
        const type = info.schema.getType('Mdx');
        const mdxFields = type.getFields();
        const resolver = mdxFields.body.resolve;
        const mdxNode = context.nodeModel.getNodeById({ id: source.parent });
        return resolver(mdxNode, args, context, {
            fieldName: 'body',
        });
    };
};

const createTimeToReadResolver = () => {
    return (source, args, context, info) => {
        const type = info.schema.getType('Mdx');
        const mdxFields = type.getFields();
        const resolver = mdxFields.timeToRead.resolve;
        const mdxNode = context.nodeModel.getNodeById({ id: source.parent });
        return resolver(mdxNode, args, context, {
            fieldName: 'timeToRead',
        });
    };
};

exports.createBodyResolver = createBodyResolver;
exports.createTimeToReadResolver = createTimeToReadResolver;
