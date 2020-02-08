export type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    JSON: any;
};

export type BooleanQueryOperatorInput = {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
    in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
    eq?: Maybe<Scalars['Date']>;
    ne?: Maybe<Scalars['Date']>;
    gt?: Maybe<Scalars['Date']>;
    gte?: Maybe<Scalars['Date']>;
    lt?: Maybe<Scalars['Date']>;
    lte?: Maybe<Scalars['Date']>;
    in?: Maybe<Array<Maybe<Scalars['Date']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    birthtime?: Maybe<Scalars['Date']>;
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
    fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
    highlight: Scalars['String'];
    shadow: Scalars['String'];
    opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    birthtime?: Maybe<Scalars['Date']>;
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    publicURL?: Maybe<Scalars['String']>;
    childImageSharp?: Maybe<ImageSharp>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childMdx?: Maybe<Mdx>;
    childImagesJson?: Maybe<ImagesJson>;
};

export type FileModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
};

export type FileEdge = {
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
};

export enum FileFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    PublicUrl = 'publicURL',
    ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
    ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
    ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
    ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
    ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
    ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
    ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
    ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
    ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
    ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
    ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
    ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
    ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
    ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
    ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
    ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
    ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
    ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
    ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
    ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
    ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
    ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
    ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
    ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
    ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
    ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
    ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
    ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
    ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
    ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
    ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
    ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
    ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
    ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
    ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
    ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
    ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
    ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
    ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
    ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
    ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
    ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
    ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
    ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
    ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
    ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
    ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
    ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
    ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
    ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
    ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
    ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
    ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
    ChildImageSharpId = 'childImageSharp___id',
    ChildImageSharpParentId = 'childImageSharp___parent___id',
    ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
    ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
    ChildImageSharpParentChildren = 'childImageSharp___parent___children',
    ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
    ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
    ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
    ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
    ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
    ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
    ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
    ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
    ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
    ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
    ChildImageSharpChildren = 'childImageSharp___children',
    ChildImageSharpChildrenId = 'childImageSharp___children___id',
    ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
    ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
    ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
    ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
    ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
    ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
    ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
    ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
    ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
    ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
    ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
    ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
    ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
    ChildImageSharpInternalContent = 'childImageSharp___internal___content',
    ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
    ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
    ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
    ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
    ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
    ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
    ChildImageSharpInternalType = 'childImageSharp___internal___type',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    ChildMdxRawBody = 'childMdx___rawBody',
    ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
    ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
    ChildMdxFrontmatterExcerpt = 'childMdx___frontmatter___excerpt',
    ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
    ChildMdxFrontmatterFeaturedImageSourceInstanceName = 'childMdx___frontmatter___featuredImage___sourceInstanceName',
    ChildMdxFrontmatterFeaturedImageAbsolutePath = 'childMdx___frontmatter___featuredImage___absolutePath',
    ChildMdxFrontmatterFeaturedImageRelativePath = 'childMdx___frontmatter___featuredImage___relativePath',
    ChildMdxFrontmatterFeaturedImageExtension = 'childMdx___frontmatter___featuredImage___extension',
    ChildMdxFrontmatterFeaturedImageSize = 'childMdx___frontmatter___featuredImage___size',
    ChildMdxFrontmatterFeaturedImagePrettySize = 'childMdx___frontmatter___featuredImage___prettySize',
    ChildMdxFrontmatterFeaturedImageModifiedTime = 'childMdx___frontmatter___featuredImage___modifiedTime',
    ChildMdxFrontmatterFeaturedImageAccessTime = 'childMdx___frontmatter___featuredImage___accessTime',
    ChildMdxFrontmatterFeaturedImageChangeTime = 'childMdx___frontmatter___featuredImage___changeTime',
    ChildMdxFrontmatterFeaturedImageBirthTime = 'childMdx___frontmatter___featuredImage___birthTime',
    ChildMdxFrontmatterFeaturedImageRoot = 'childMdx___frontmatter___featuredImage___root',
    ChildMdxFrontmatterFeaturedImageDir = 'childMdx___frontmatter___featuredImage___dir',
    ChildMdxFrontmatterFeaturedImageBase = 'childMdx___frontmatter___featuredImage___base',
    ChildMdxFrontmatterFeaturedImageExt = 'childMdx___frontmatter___featuredImage___ext',
    ChildMdxFrontmatterFeaturedImageName = 'childMdx___frontmatter___featuredImage___name',
    ChildMdxFrontmatterFeaturedImageRelativeDirectory = 'childMdx___frontmatter___featuredImage___relativeDirectory',
    ChildMdxFrontmatterFeaturedImageDev = 'childMdx___frontmatter___featuredImage___dev',
    ChildMdxFrontmatterFeaturedImageMode = 'childMdx___frontmatter___featuredImage___mode',
    ChildMdxFrontmatterFeaturedImageNlink = 'childMdx___frontmatter___featuredImage___nlink',
    ChildMdxFrontmatterFeaturedImageUid = 'childMdx___frontmatter___featuredImage___uid',
    ChildMdxFrontmatterFeaturedImageGid = 'childMdx___frontmatter___featuredImage___gid',
    ChildMdxFrontmatterFeaturedImageRdev = 'childMdx___frontmatter___featuredImage___rdev',
    ChildMdxFrontmatterFeaturedImageIno = 'childMdx___frontmatter___featuredImage___ino',
    ChildMdxFrontmatterFeaturedImageAtimeMs = 'childMdx___frontmatter___featuredImage___atimeMs',
    ChildMdxFrontmatterFeaturedImageMtimeMs = 'childMdx___frontmatter___featuredImage___mtimeMs',
    ChildMdxFrontmatterFeaturedImageCtimeMs = 'childMdx___frontmatter___featuredImage___ctimeMs',
    ChildMdxFrontmatterFeaturedImageAtime = 'childMdx___frontmatter___featuredImage___atime',
    ChildMdxFrontmatterFeaturedImageMtime = 'childMdx___frontmatter___featuredImage___mtime',
    ChildMdxFrontmatterFeaturedImageCtime = 'childMdx___frontmatter___featuredImage___ctime',
    ChildMdxFrontmatterFeaturedImageBirthtime = 'childMdx___frontmatter___featuredImage___birthtime',
    ChildMdxFrontmatterFeaturedImageBirthtimeMs = 'childMdx___frontmatter___featuredImage___birthtimeMs',
    ChildMdxFrontmatterFeaturedImageBlksize = 'childMdx___frontmatter___featuredImage___blksize',
    ChildMdxFrontmatterFeaturedImageBlocks = 'childMdx___frontmatter___featuredImage___blocks',
    ChildMdxFrontmatterFeaturedImagePublicUrl = 'childMdx___frontmatter___featuredImage___publicURL',
    ChildMdxFrontmatterFeaturedImageId = 'childMdx___frontmatter___featuredImage___id',
    ChildMdxFrontmatterFeaturedImageChildren = 'childMdx___frontmatter___featuredImage___children',
    ChildMdxFrontmatterFeaturedImagePosition = 'childMdx___frontmatter___featuredImagePosition',
    ChildMdxFrontmatterDraft = 'childMdx___frontmatter___draft',
    ChildMdxBody = 'childMdx___body',
    ChildMdxExcerpt = 'childMdx___excerpt',
    ChildMdxHeadings = 'childMdx___headings',
    ChildMdxHeadingsValue = 'childMdx___headings___value',
    ChildMdxHeadingsDepth = 'childMdx___headings___depth',
    ChildMdxHtml = 'childMdx___html',
    ChildMdxMdxAst = 'childMdx___mdxAST',
    ChildMdxTableOfContents = 'childMdx___tableOfContents',
    ChildMdxTimeToRead = 'childMdx___timeToRead',
    ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
    ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
    ChildMdxWordCountWords = 'childMdx___wordCount___words',
    ChildMdxId = 'childMdx___id',
    ChildMdxParentId = 'childMdx___parent___id',
    ChildMdxParentParentId = 'childMdx___parent___parent___id',
    ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
    ChildMdxParentChildren = 'childMdx___parent___children',
    ChildMdxParentChildrenId = 'childMdx___parent___children___id',
    ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
    ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
    ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
    ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
    ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
    ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
    ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
    ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
    ChildMdxParentInternalType = 'childMdx___parent___internal___type',
    ChildMdxChildren = 'childMdx___children',
    ChildMdxChildrenId = 'childMdx___children___id',
    ChildMdxChildrenParentId = 'childMdx___children___parent___id',
    ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
    ChildMdxChildrenChildren = 'childMdx___children___children',
    ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
    ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
    ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
    ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
    ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
    ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
    ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
    ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
    ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
    ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
    ChildMdxInternalContent = 'childMdx___internal___content',
    ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
    ChildMdxInternalDescription = 'childMdx___internal___description',
    ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
    ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
    ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
    ChildMdxInternalOwner = 'childMdx___internal___owner',
    ChildMdxInternalType = 'childMdx___internal___type',
    ChildImagesJsonId = 'childImagesJson___id',
    ChildImagesJsonParentId = 'childImagesJson___parent___id',
    ChildImagesJsonParentParentId = 'childImagesJson___parent___parent___id',
    ChildImagesJsonParentParentChildren = 'childImagesJson___parent___parent___children',
    ChildImagesJsonParentChildren = 'childImagesJson___parent___children',
    ChildImagesJsonParentChildrenId = 'childImagesJson___parent___children___id',
    ChildImagesJsonParentChildrenChildren = 'childImagesJson___parent___children___children',
    ChildImagesJsonParentInternalContent = 'childImagesJson___parent___internal___content',
    ChildImagesJsonParentInternalContentDigest = 'childImagesJson___parent___internal___contentDigest',
    ChildImagesJsonParentInternalDescription = 'childImagesJson___parent___internal___description',
    ChildImagesJsonParentInternalFieldOwners = 'childImagesJson___parent___internal___fieldOwners',
    ChildImagesJsonParentInternalIgnoreType = 'childImagesJson___parent___internal___ignoreType',
    ChildImagesJsonParentInternalMediaType = 'childImagesJson___parent___internal___mediaType',
    ChildImagesJsonParentInternalOwner = 'childImagesJson___parent___internal___owner',
    ChildImagesJsonParentInternalType = 'childImagesJson___parent___internal___type',
    ChildImagesJsonChildren = 'childImagesJson___children',
    ChildImagesJsonChildrenId = 'childImagesJson___children___id',
    ChildImagesJsonChildrenParentId = 'childImagesJson___children___parent___id',
    ChildImagesJsonChildrenParentChildren = 'childImagesJson___children___parent___children',
    ChildImagesJsonChildrenChildren = 'childImagesJson___children___children',
    ChildImagesJsonChildrenChildrenId = 'childImagesJson___children___children___id',
    ChildImagesJsonChildrenChildrenChildren = 'childImagesJson___children___children___children',
    ChildImagesJsonChildrenInternalContent = 'childImagesJson___children___internal___content',
    ChildImagesJsonChildrenInternalContentDigest = 'childImagesJson___children___internal___contentDigest',
    ChildImagesJsonChildrenInternalDescription = 'childImagesJson___children___internal___description',
    ChildImagesJsonChildrenInternalFieldOwners = 'childImagesJson___children___internal___fieldOwners',
    ChildImagesJsonChildrenInternalIgnoreType = 'childImagesJson___children___internal___ignoreType',
    ChildImagesJsonChildrenInternalMediaType = 'childImagesJson___children___internal___mediaType',
    ChildImagesJsonChildrenInternalOwner = 'childImagesJson___children___internal___owner',
    ChildImagesJsonChildrenInternalType = 'childImagesJson___children___internal___type',
    ChildImagesJsonInternalContent = 'childImagesJson___internal___content',
    ChildImagesJsonInternalContentDigest = 'childImagesJson___internal___contentDigest',
    ChildImagesJsonInternalDescription = 'childImagesJson___internal___description',
    ChildImagesJsonInternalFieldOwners = 'childImagesJson___internal___fieldOwners',
    ChildImagesJsonInternalIgnoreType = 'childImagesJson___internal___ignoreType',
    ChildImagesJsonInternalMediaType = 'childImagesJson___internal___mediaType',
    ChildImagesJsonInternalOwner = 'childImagesJson___internal___owner',
    ChildImagesJsonInternalType = 'childImagesJson___internal___type',
    ChildImagesJsonGallery = 'childImagesJson___gallery',
    ChildImagesJsonGalleryImageSourceInstanceName = 'childImagesJson___gallery___image___sourceInstanceName',
    ChildImagesJsonGalleryImageAbsolutePath = 'childImagesJson___gallery___image___absolutePath',
    ChildImagesJsonGalleryImageRelativePath = 'childImagesJson___gallery___image___relativePath',
    ChildImagesJsonGalleryImageExtension = 'childImagesJson___gallery___image___extension',
    ChildImagesJsonGalleryImageSize = 'childImagesJson___gallery___image___size',
    ChildImagesJsonGalleryImagePrettySize = 'childImagesJson___gallery___image___prettySize',
    ChildImagesJsonGalleryImageModifiedTime = 'childImagesJson___gallery___image___modifiedTime',
    ChildImagesJsonGalleryImageAccessTime = 'childImagesJson___gallery___image___accessTime',
    ChildImagesJsonGalleryImageChangeTime = 'childImagesJson___gallery___image___changeTime',
    ChildImagesJsonGalleryImageBirthTime = 'childImagesJson___gallery___image___birthTime',
    ChildImagesJsonGalleryImageRoot = 'childImagesJson___gallery___image___root',
    ChildImagesJsonGalleryImageDir = 'childImagesJson___gallery___image___dir',
    ChildImagesJsonGalleryImageBase = 'childImagesJson___gallery___image___base',
    ChildImagesJsonGalleryImageExt = 'childImagesJson___gallery___image___ext',
    ChildImagesJsonGalleryImageName = 'childImagesJson___gallery___image___name',
    ChildImagesJsonGalleryImageRelativeDirectory = 'childImagesJson___gallery___image___relativeDirectory',
    ChildImagesJsonGalleryImageDev = 'childImagesJson___gallery___image___dev',
    ChildImagesJsonGalleryImageMode = 'childImagesJson___gallery___image___mode',
    ChildImagesJsonGalleryImageNlink = 'childImagesJson___gallery___image___nlink',
    ChildImagesJsonGalleryImageUid = 'childImagesJson___gallery___image___uid',
    ChildImagesJsonGalleryImageGid = 'childImagesJson___gallery___image___gid',
    ChildImagesJsonGalleryImageRdev = 'childImagesJson___gallery___image___rdev',
    ChildImagesJsonGalleryImageIno = 'childImagesJson___gallery___image___ino',
    ChildImagesJsonGalleryImageAtimeMs = 'childImagesJson___gallery___image___atimeMs',
    ChildImagesJsonGalleryImageMtimeMs = 'childImagesJson___gallery___image___mtimeMs',
    ChildImagesJsonGalleryImageCtimeMs = 'childImagesJson___gallery___image___ctimeMs',
    ChildImagesJsonGalleryImageAtime = 'childImagesJson___gallery___image___atime',
    ChildImagesJsonGalleryImageMtime = 'childImagesJson___gallery___image___mtime',
    ChildImagesJsonGalleryImageCtime = 'childImagesJson___gallery___image___ctime',
    ChildImagesJsonGalleryImageBirthtime = 'childImagesJson___gallery___image___birthtime',
    ChildImagesJsonGalleryImageBirthtimeMs = 'childImagesJson___gallery___image___birthtimeMs',
    ChildImagesJsonGalleryImageBlksize = 'childImagesJson___gallery___image___blksize',
    ChildImagesJsonGalleryImageBlocks = 'childImagesJson___gallery___image___blocks',
    ChildImagesJsonGalleryImagePublicUrl = 'childImagesJson___gallery___image___publicURL',
    ChildImagesJsonGalleryImageId = 'childImagesJson___gallery___image___id',
    ChildImagesJsonGalleryImageChildren = 'childImagesJson___gallery___image___children',
    ChildImagesJsonGalleryTitle = 'childImagesJson___gallery___title',
}

export type FileFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childMdx?: Maybe<MdxFilterInput>;
    childImagesJson?: Maybe<ImagesJsonFilterInput>;
};

export type FileGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
    fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
    eq?: Maybe<Scalars['Float']>;
    ne?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Maybe<Scalars['Float']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export enum ImageCropFocus {
    Center = 'CENTER',
    North = 'NORTH',
    Northeast = 'NORTHEAST',
    East = 'EAST',
    Southeast = 'SOUTHEAST',
    South = 'SOUTH',
    Southwest = 'SOUTHWEST',
    West = 'WEST',
    Northwest = 'NORTHWEST',
    Entropy = 'ENTROPY',
    Attention = 'ATTENTION',
}

export enum ImageFit {
    Cover = 'COVER',
    Contain = 'CONTAIN',
    Fill = 'FILL',
}

export enum ImageFormat {
    NoChange = 'NO_CHANGE',
    Jpg = 'JPG',
    Png = 'PNG',
    Webp = 'WEBP',
}

export type ImageSharp = Node & {
    fixed?: Maybe<ImageSharpFixed>;
    resolutions?: Maybe<ImageSharpResolutions>;
    fluid?: Maybe<ImageSharpFluid>;
    sizes?: Maybe<ImageSharpSizes>;
    original?: Maybe<ImageSharpOriginal>;
    resize?: Maybe<ImageSharpResize>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type ImageSharpFixedArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG?: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
    next?: Maybe<ImageSharp>;
    node: ImageSharp;
    previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
    FixedBase64 = 'fixed___base64',
    FixedTracedSvg = 'fixed___tracedSVG',
    FixedAspectRatio = 'fixed___aspectRatio',
    FixedWidth = 'fixed___width',
    FixedHeight = 'fixed___height',
    FixedSrc = 'fixed___src',
    FixedSrcSet = 'fixed___srcSet',
    FixedSrcWebp = 'fixed___srcWebp',
    FixedSrcSetWebp = 'fixed___srcSetWebp',
    FixedOriginalName = 'fixed___originalName',
    ResolutionsBase64 = 'resolutions___base64',
    ResolutionsTracedSvg = 'resolutions___tracedSVG',
    ResolutionsAspectRatio = 'resolutions___aspectRatio',
    ResolutionsWidth = 'resolutions___width',
    ResolutionsHeight = 'resolutions___height',
    ResolutionsSrc = 'resolutions___src',
    ResolutionsSrcSet = 'resolutions___srcSet',
    ResolutionsSrcWebp = 'resolutions___srcWebp',
    ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
    ResolutionsOriginalName = 'resolutions___originalName',
    FluidBase64 = 'fluid___base64',
    FluidTracedSvg = 'fluid___tracedSVG',
    FluidAspectRatio = 'fluid___aspectRatio',
    FluidSrc = 'fluid___src',
    FluidSrcSet = 'fluid___srcSet',
    FluidSrcWebp = 'fluid___srcWebp',
    FluidSrcSetWebp = 'fluid___srcSetWebp',
    FluidSizes = 'fluid___sizes',
    FluidOriginalImg = 'fluid___originalImg',
    FluidOriginalName = 'fluid___originalName',
    FluidPresentationWidth = 'fluid___presentationWidth',
    FluidPresentationHeight = 'fluid___presentationHeight',
    SizesBase64 = 'sizes___base64',
    SizesTracedSvg = 'sizes___tracedSVG',
    SizesAspectRatio = 'sizes___aspectRatio',
    SizesSrc = 'sizes___src',
    SizesSrcSet = 'sizes___srcSet',
    SizesSrcWebp = 'sizes___srcWebp',
    SizesSrcSetWebp = 'sizes___srcSetWebp',
    SizesSizes = 'sizes___sizes',
    SizesOriginalImg = 'sizes___originalImg',
    SizesOriginalName = 'sizes___originalName',
    SizesPresentationWidth = 'sizes___presentationWidth',
    SizesPresentationHeight = 'sizes___presentationHeight',
    OriginalWidth = 'original___width',
    OriginalHeight = 'original___height',
    OriginalSrc = 'original___src',
    ResizeSrc = 'resize___src',
    ResizeTracedSvg = 'resize___tracedSVG',
    ResizeWidth = 'resize___width',
    ResizeHeight = 'resize___height',
    ResizeAspectRatio = 'resize___aspectRatio',
    ResizeOriginalName = 'resize___originalName',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth?: Maybe<Scalars['Int']>;
    presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
    width?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
    src?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
    src?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth?: Maybe<Scalars['Int']>;
    presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
    fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImagesJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    gallery?: Maybe<Array<Maybe<ImagesJsonGallery>>>;
};

export type ImagesJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImagesJsonEdge>;
    nodes: Array<ImagesJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ImagesJsonGroupConnection>;
};

export type ImagesJsonConnectionDistinctArgs = {
    field: ImagesJsonFieldsEnum;
};

export type ImagesJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ImagesJsonFieldsEnum;
};

export type ImagesJsonEdge = {
    next?: Maybe<ImagesJson>;
    node: ImagesJson;
    previous?: Maybe<ImagesJson>;
};

export enum ImagesJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Gallery = 'gallery',
    GalleryImageSourceInstanceName = 'gallery___image___sourceInstanceName',
    GalleryImageAbsolutePath = 'gallery___image___absolutePath',
    GalleryImageRelativePath = 'gallery___image___relativePath',
    GalleryImageExtension = 'gallery___image___extension',
    GalleryImageSize = 'gallery___image___size',
    GalleryImagePrettySize = 'gallery___image___prettySize',
    GalleryImageModifiedTime = 'gallery___image___modifiedTime',
    GalleryImageAccessTime = 'gallery___image___accessTime',
    GalleryImageChangeTime = 'gallery___image___changeTime',
    GalleryImageBirthTime = 'gallery___image___birthTime',
    GalleryImageRoot = 'gallery___image___root',
    GalleryImageDir = 'gallery___image___dir',
    GalleryImageBase = 'gallery___image___base',
    GalleryImageExt = 'gallery___image___ext',
    GalleryImageName = 'gallery___image___name',
    GalleryImageRelativeDirectory = 'gallery___image___relativeDirectory',
    GalleryImageDev = 'gallery___image___dev',
    GalleryImageMode = 'gallery___image___mode',
    GalleryImageNlink = 'gallery___image___nlink',
    GalleryImageUid = 'gallery___image___uid',
    GalleryImageGid = 'gallery___image___gid',
    GalleryImageRdev = 'gallery___image___rdev',
    GalleryImageIno = 'gallery___image___ino',
    GalleryImageAtimeMs = 'gallery___image___atimeMs',
    GalleryImageMtimeMs = 'gallery___image___mtimeMs',
    GalleryImageCtimeMs = 'gallery___image___ctimeMs',
    GalleryImageAtime = 'gallery___image___atime',
    GalleryImageMtime = 'gallery___image___mtime',
    GalleryImageCtime = 'gallery___image___ctime',
    GalleryImageBirthtime = 'gallery___image___birthtime',
    GalleryImageBirthtimeMs = 'gallery___image___birthtimeMs',
    GalleryImageBlksize = 'gallery___image___blksize',
    GalleryImageBlocks = 'gallery___image___blocks',
    GalleryImagePublicUrl = 'gallery___image___publicURL',
    GalleryImageChildImageSharpId = 'gallery___image___childImageSharp___id',
    GalleryImageChildImageSharpChildren = 'gallery___image___childImageSharp___children',
    GalleryImageId = 'gallery___image___id',
    GalleryImageParentId = 'gallery___image___parent___id',
    GalleryImageParentChildren = 'gallery___image___parent___children',
    GalleryImageChildren = 'gallery___image___children',
    GalleryImageChildrenId = 'gallery___image___children___id',
    GalleryImageChildrenChildren = 'gallery___image___children___children',
    GalleryImageInternalContent = 'gallery___image___internal___content',
    GalleryImageInternalContentDigest = 'gallery___image___internal___contentDigest',
    GalleryImageInternalDescription = 'gallery___image___internal___description',
    GalleryImageInternalFieldOwners = 'gallery___image___internal___fieldOwners',
    GalleryImageInternalIgnoreType = 'gallery___image___internal___ignoreType',
    GalleryImageInternalMediaType = 'gallery___image___internal___mediaType',
    GalleryImageInternalOwner = 'gallery___image___internal___owner',
    GalleryImageInternalType = 'gallery___image___internal___type',
    GalleryImageChildMdxRawBody = 'gallery___image___childMdx___rawBody',
    GalleryImageChildMdxFileAbsolutePath = 'gallery___image___childMdx___fileAbsolutePath',
    GalleryImageChildMdxBody = 'gallery___image___childMdx___body',
    GalleryImageChildMdxExcerpt = 'gallery___image___childMdx___excerpt',
    GalleryImageChildMdxHeadings = 'gallery___image___childMdx___headings',
    GalleryImageChildMdxHtml = 'gallery___image___childMdx___html',
    GalleryImageChildMdxMdxAst = 'gallery___image___childMdx___mdxAST',
    GalleryImageChildMdxTableOfContents = 'gallery___image___childMdx___tableOfContents',
    GalleryImageChildMdxTimeToRead = 'gallery___image___childMdx___timeToRead',
    GalleryImageChildMdxId = 'gallery___image___childMdx___id',
    GalleryImageChildMdxChildren = 'gallery___image___childMdx___children',
    GalleryImageChildImagesJsonId = 'gallery___image___childImagesJson___id',
    GalleryImageChildImagesJsonChildren = 'gallery___image___childImagesJson___children',
    GalleryImageChildImagesJsonGallery = 'gallery___image___childImagesJson___gallery',
    GalleryTitle = 'gallery___title',
}

export type ImagesJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    gallery?: Maybe<ImagesJsonGalleryFilterListInput>;
};

export type ImagesJsonGallery = {
    image?: Maybe<File>;
    title?: Maybe<Scalars['String']>;
};

export type ImagesJsonGalleryFilterInput = {
    image?: Maybe<FileFilterInput>;
    title?: Maybe<StringQueryOperatorInput>;
};

export type ImagesJsonGalleryFilterListInput = {
    elemMatch?: Maybe<ImagesJsonGalleryFilterInput>;
};

export type ImagesJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImagesJsonEdge>;
    nodes: Array<ImagesJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type ImagesJsonSortInput = {
    fields?: Maybe<Array<Maybe<ImagesJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
    content?: Maybe<Scalars['String']>;
    contentDigest: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
    ignoreType?: Maybe<Scalars['Boolean']>;
    mediaType?: Maybe<Scalars['String']>;
    owner: Scalars['String'];
    type: Scalars['String'];
};

export type InternalFilterInput = {
    content?: Maybe<StringQueryOperatorInput>;
    contentDigest?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    fieldOwners?: Maybe<StringQueryOperatorInput>;
    ignoreType?: Maybe<BooleanQueryOperatorInput>;
    mediaType?: Maybe<StringQueryOperatorInput>;
    owner?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
    eq?: Maybe<Scalars['Int']>;
    ne?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Maybe<Scalars['Int']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
    eq?: Maybe<Scalars['JSON']>;
    ne?: Maybe<Scalars['JSON']>;
    in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    regex?: Maybe<Scalars['JSON']>;
    glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
    rawBody: Scalars['String'];
    fileAbsolutePath: Scalars['String'];
    frontmatter?: Maybe<MdxFrontmatter>;
    body: Scalars['String'];
    excerpt: Scalars['String'];
    headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
    html?: Maybe<Scalars['String']>;
    mdxAST?: Maybe<Scalars['JSON']>;
    tableOfContents?: Maybe<Scalars['JSON']>;
    timeToRead?: Maybe<Scalars['Int']>;
    wordCount?: Maybe<MdxWordCount>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type MdxExcerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
};

export type MdxHeadingsArgs = {
    depth?: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
    maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
    totalCount: Scalars['Int'];
    edges: Array<MdxEdge>;
    nodes: Array<Mdx>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<MdxGroupConnection>;
};

export type MdxConnectionDistinctArgs = {
    field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: MdxFieldsEnum;
};

export type MdxEdge = {
    next?: Maybe<Mdx>;
    node: Mdx;
    previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
    RawBody = 'rawBody',
    FileAbsolutePath = 'fileAbsolutePath',
    FrontmatterTitle = 'frontmatter___title',
    FrontmatterExcerpt = 'frontmatter___excerpt',
    FrontmatterTags = 'frontmatter___tags',
    FrontmatterFeaturedImageSourceInstanceName = 'frontmatter___featuredImage___sourceInstanceName',
    FrontmatterFeaturedImageAbsolutePath = 'frontmatter___featuredImage___absolutePath',
    FrontmatterFeaturedImageRelativePath = 'frontmatter___featuredImage___relativePath',
    FrontmatterFeaturedImageExtension = 'frontmatter___featuredImage___extension',
    FrontmatterFeaturedImageSize = 'frontmatter___featuredImage___size',
    FrontmatterFeaturedImagePrettySize = 'frontmatter___featuredImage___prettySize',
    FrontmatterFeaturedImageModifiedTime = 'frontmatter___featuredImage___modifiedTime',
    FrontmatterFeaturedImageAccessTime = 'frontmatter___featuredImage___accessTime',
    FrontmatterFeaturedImageChangeTime = 'frontmatter___featuredImage___changeTime',
    FrontmatterFeaturedImageBirthTime = 'frontmatter___featuredImage___birthTime',
    FrontmatterFeaturedImageRoot = 'frontmatter___featuredImage___root',
    FrontmatterFeaturedImageDir = 'frontmatter___featuredImage___dir',
    FrontmatterFeaturedImageBase = 'frontmatter___featuredImage___base',
    FrontmatterFeaturedImageExt = 'frontmatter___featuredImage___ext',
    FrontmatterFeaturedImageName = 'frontmatter___featuredImage___name',
    FrontmatterFeaturedImageRelativeDirectory = 'frontmatter___featuredImage___relativeDirectory',
    FrontmatterFeaturedImageDev = 'frontmatter___featuredImage___dev',
    FrontmatterFeaturedImageMode = 'frontmatter___featuredImage___mode',
    FrontmatterFeaturedImageNlink = 'frontmatter___featuredImage___nlink',
    FrontmatterFeaturedImageUid = 'frontmatter___featuredImage___uid',
    FrontmatterFeaturedImageGid = 'frontmatter___featuredImage___gid',
    FrontmatterFeaturedImageRdev = 'frontmatter___featuredImage___rdev',
    FrontmatterFeaturedImageIno = 'frontmatter___featuredImage___ino',
    FrontmatterFeaturedImageAtimeMs = 'frontmatter___featuredImage___atimeMs',
    FrontmatterFeaturedImageMtimeMs = 'frontmatter___featuredImage___mtimeMs',
    FrontmatterFeaturedImageCtimeMs = 'frontmatter___featuredImage___ctimeMs',
    FrontmatterFeaturedImageAtime = 'frontmatter___featuredImage___atime',
    FrontmatterFeaturedImageMtime = 'frontmatter___featuredImage___mtime',
    FrontmatterFeaturedImageCtime = 'frontmatter___featuredImage___ctime',
    FrontmatterFeaturedImageBirthtime = 'frontmatter___featuredImage___birthtime',
    FrontmatterFeaturedImageBirthtimeMs = 'frontmatter___featuredImage___birthtimeMs',
    FrontmatterFeaturedImageBlksize = 'frontmatter___featuredImage___blksize',
    FrontmatterFeaturedImageBlocks = 'frontmatter___featuredImage___blocks',
    FrontmatterFeaturedImagePublicUrl = 'frontmatter___featuredImage___publicURL',
    FrontmatterFeaturedImageChildImageSharpId = 'frontmatter___featuredImage___childImageSharp___id',
    FrontmatterFeaturedImageChildImageSharpChildren = 'frontmatter___featuredImage___childImageSharp___children',
    FrontmatterFeaturedImageId = 'frontmatter___featuredImage___id',
    FrontmatterFeaturedImageParentId = 'frontmatter___featuredImage___parent___id',
    FrontmatterFeaturedImageParentChildren = 'frontmatter___featuredImage___parent___children',
    FrontmatterFeaturedImageChildren = 'frontmatter___featuredImage___children',
    FrontmatterFeaturedImageChildrenId = 'frontmatter___featuredImage___children___id',
    FrontmatterFeaturedImageChildrenChildren = 'frontmatter___featuredImage___children___children',
    FrontmatterFeaturedImageInternalContent = 'frontmatter___featuredImage___internal___content',
    FrontmatterFeaturedImageInternalContentDigest = 'frontmatter___featuredImage___internal___contentDigest',
    FrontmatterFeaturedImageInternalDescription = 'frontmatter___featuredImage___internal___description',
    FrontmatterFeaturedImageInternalFieldOwners = 'frontmatter___featuredImage___internal___fieldOwners',
    FrontmatterFeaturedImageInternalIgnoreType = 'frontmatter___featuredImage___internal___ignoreType',
    FrontmatterFeaturedImageInternalMediaType = 'frontmatter___featuredImage___internal___mediaType',
    FrontmatterFeaturedImageInternalOwner = 'frontmatter___featuredImage___internal___owner',
    FrontmatterFeaturedImageInternalType = 'frontmatter___featuredImage___internal___type',
    FrontmatterFeaturedImageChildMdxRawBody = 'frontmatter___featuredImage___childMdx___rawBody',
    FrontmatterFeaturedImageChildMdxFileAbsolutePath = 'frontmatter___featuredImage___childMdx___fileAbsolutePath',
    FrontmatterFeaturedImageChildMdxBody = 'frontmatter___featuredImage___childMdx___body',
    FrontmatterFeaturedImageChildMdxExcerpt = 'frontmatter___featuredImage___childMdx___excerpt',
    FrontmatterFeaturedImageChildMdxHeadings = 'frontmatter___featuredImage___childMdx___headings',
    FrontmatterFeaturedImageChildMdxHtml = 'frontmatter___featuredImage___childMdx___html',
    FrontmatterFeaturedImageChildMdxMdxAst = 'frontmatter___featuredImage___childMdx___mdxAST',
    FrontmatterFeaturedImageChildMdxTableOfContents = 'frontmatter___featuredImage___childMdx___tableOfContents',
    FrontmatterFeaturedImageChildMdxTimeToRead = 'frontmatter___featuredImage___childMdx___timeToRead',
    FrontmatterFeaturedImageChildMdxId = 'frontmatter___featuredImage___childMdx___id',
    FrontmatterFeaturedImageChildMdxChildren = 'frontmatter___featuredImage___childMdx___children',
    FrontmatterFeaturedImageChildImagesJsonId = 'frontmatter___featuredImage___childImagesJson___id',
    FrontmatterFeaturedImageChildImagesJsonChildren = 'frontmatter___featuredImage___childImagesJson___children',
    FrontmatterFeaturedImageChildImagesJsonGallery = 'frontmatter___featuredImage___childImagesJson___gallery',
    FrontmatterFeaturedImagePosition = 'frontmatter___featuredImagePosition',
    FrontmatterDraft = 'frontmatter___draft',
    Body = 'body',
    Excerpt = 'excerpt',
    Headings = 'headings',
    HeadingsValue = 'headings___value',
    HeadingsDepth = 'headings___depth',
    Html = 'html',
    MdxAst = 'mdxAST',
    TableOfContents = 'tableOfContents',
    TimeToRead = 'timeToRead',
    WordCountParagraphs = 'wordCount___paragraphs',
    WordCountSentences = 'wordCount___sentences',
    WordCountWords = 'wordCount___words',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type MdxFilterInput = {
    rawBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MdxFrontmatterFilterInput>;
    body?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    headings?: Maybe<MdxHeadingMdxFilterListInput>;
    html?: Maybe<StringQueryOperatorInput>;
    mdxAST?: Maybe<JsonQueryOperatorInput>;
    tableOfContents?: Maybe<JsonQueryOperatorInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    wordCount?: Maybe<MdxWordCountFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type MdxFrontmatter = {
    title: Scalars['String'];
    excerpt?: Maybe<Scalars['String']>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
    featuredImage?: Maybe<File>;
    featuredImagePosition?: Maybe<Scalars['String']>;
    draft?: Maybe<Scalars['Boolean']>;
};

export type MdxFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    featuredImage?: Maybe<FileFilterInput>;
    featuredImagePosition?: Maybe<StringQueryOperatorInput>;
    draft?: Maybe<BooleanQueryOperatorInput>;
};

export type MdxGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<MdxEdge>;
    nodes: Array<Mdx>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
    value?: Maybe<Scalars['String']>;
    depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
    value?: Maybe<StringQueryOperatorInput>;
    depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
    elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
    fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
    paragraphs?: Maybe<Scalars['Int']>;
    sentences?: Maybe<Scalars['Int']>;
    words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
};

export type Node = {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type NodeFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
    elemMatch?: Maybe<NodeFilterInput>;
};

export type Page = Node & {
    id: Scalars['ID'];
    title: Scalars['String'];
    draft?: Maybe<Scalars['Boolean']>;
    path: Scalars['String'];
    body: Scalars['String'];
    featuredImage?: Maybe<File>;
    featuredImagePosition?: Maybe<Scalars['String']>;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type PageConnection = {
    totalCount: Scalars['Int'];
    edges: Array<PageEdge>;
    nodes: Array<Page>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<PageGroupConnection>;
};

export type PageConnectionDistinctArgs = {
    field: PageFieldsEnum;
};

export type PageConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: PageFieldsEnum;
};

export type PageEdge = {
    next?: Maybe<Page>;
    node: Page;
    previous?: Maybe<Page>;
};

export enum PageFieldsEnum {
    Id = 'id',
    Title = 'title',
    Draft = 'draft',
    Path = 'path',
    Body = 'body',
    FeaturedImageSourceInstanceName = 'featuredImage___sourceInstanceName',
    FeaturedImageAbsolutePath = 'featuredImage___absolutePath',
    FeaturedImageRelativePath = 'featuredImage___relativePath',
    FeaturedImageExtension = 'featuredImage___extension',
    FeaturedImageSize = 'featuredImage___size',
    FeaturedImagePrettySize = 'featuredImage___prettySize',
    FeaturedImageModifiedTime = 'featuredImage___modifiedTime',
    FeaturedImageAccessTime = 'featuredImage___accessTime',
    FeaturedImageChangeTime = 'featuredImage___changeTime',
    FeaturedImageBirthTime = 'featuredImage___birthTime',
    FeaturedImageRoot = 'featuredImage___root',
    FeaturedImageDir = 'featuredImage___dir',
    FeaturedImageBase = 'featuredImage___base',
    FeaturedImageExt = 'featuredImage___ext',
    FeaturedImageName = 'featuredImage___name',
    FeaturedImageRelativeDirectory = 'featuredImage___relativeDirectory',
    FeaturedImageDev = 'featuredImage___dev',
    FeaturedImageMode = 'featuredImage___mode',
    FeaturedImageNlink = 'featuredImage___nlink',
    FeaturedImageUid = 'featuredImage___uid',
    FeaturedImageGid = 'featuredImage___gid',
    FeaturedImageRdev = 'featuredImage___rdev',
    FeaturedImageIno = 'featuredImage___ino',
    FeaturedImageAtimeMs = 'featuredImage___atimeMs',
    FeaturedImageMtimeMs = 'featuredImage___mtimeMs',
    FeaturedImageCtimeMs = 'featuredImage___ctimeMs',
    FeaturedImageAtime = 'featuredImage___atime',
    FeaturedImageMtime = 'featuredImage___mtime',
    FeaturedImageCtime = 'featuredImage___ctime',
    FeaturedImageBirthtime = 'featuredImage___birthtime',
    FeaturedImageBirthtimeMs = 'featuredImage___birthtimeMs',
    FeaturedImageBlksize = 'featuredImage___blksize',
    FeaturedImageBlocks = 'featuredImage___blocks',
    FeaturedImagePublicUrl = 'featuredImage___publicURL',
    FeaturedImageChildImageSharpFixedBase64 = 'featuredImage___childImageSharp___fixed___base64',
    FeaturedImageChildImageSharpFixedTracedSvg = 'featuredImage___childImageSharp___fixed___tracedSVG',
    FeaturedImageChildImageSharpFixedAspectRatio = 'featuredImage___childImageSharp___fixed___aspectRatio',
    FeaturedImageChildImageSharpFixedWidth = 'featuredImage___childImageSharp___fixed___width',
    FeaturedImageChildImageSharpFixedHeight = 'featuredImage___childImageSharp___fixed___height',
    FeaturedImageChildImageSharpFixedSrc = 'featuredImage___childImageSharp___fixed___src',
    FeaturedImageChildImageSharpFixedSrcSet = 'featuredImage___childImageSharp___fixed___srcSet',
    FeaturedImageChildImageSharpFixedSrcWebp = 'featuredImage___childImageSharp___fixed___srcWebp',
    FeaturedImageChildImageSharpFixedSrcSetWebp = 'featuredImage___childImageSharp___fixed___srcSetWebp',
    FeaturedImageChildImageSharpFixedOriginalName = 'featuredImage___childImageSharp___fixed___originalName',
    FeaturedImageChildImageSharpResolutionsBase64 = 'featuredImage___childImageSharp___resolutions___base64',
    FeaturedImageChildImageSharpResolutionsTracedSvg = 'featuredImage___childImageSharp___resolutions___tracedSVG',
    FeaturedImageChildImageSharpResolutionsAspectRatio = 'featuredImage___childImageSharp___resolutions___aspectRatio',
    FeaturedImageChildImageSharpResolutionsWidth = 'featuredImage___childImageSharp___resolutions___width',
    FeaturedImageChildImageSharpResolutionsHeight = 'featuredImage___childImageSharp___resolutions___height',
    FeaturedImageChildImageSharpResolutionsSrc = 'featuredImage___childImageSharp___resolutions___src',
    FeaturedImageChildImageSharpResolutionsSrcSet = 'featuredImage___childImageSharp___resolutions___srcSet',
    FeaturedImageChildImageSharpResolutionsSrcWebp = 'featuredImage___childImageSharp___resolutions___srcWebp',
    FeaturedImageChildImageSharpResolutionsSrcSetWebp = 'featuredImage___childImageSharp___resolutions___srcSetWebp',
    FeaturedImageChildImageSharpResolutionsOriginalName = 'featuredImage___childImageSharp___resolutions___originalName',
    FeaturedImageChildImageSharpFluidBase64 = 'featuredImage___childImageSharp___fluid___base64',
    FeaturedImageChildImageSharpFluidTracedSvg = 'featuredImage___childImageSharp___fluid___tracedSVG',
    FeaturedImageChildImageSharpFluidAspectRatio = 'featuredImage___childImageSharp___fluid___aspectRatio',
    FeaturedImageChildImageSharpFluidSrc = 'featuredImage___childImageSharp___fluid___src',
    FeaturedImageChildImageSharpFluidSrcSet = 'featuredImage___childImageSharp___fluid___srcSet',
    FeaturedImageChildImageSharpFluidSrcWebp = 'featuredImage___childImageSharp___fluid___srcWebp',
    FeaturedImageChildImageSharpFluidSrcSetWebp = 'featuredImage___childImageSharp___fluid___srcSetWebp',
    FeaturedImageChildImageSharpFluidSizes = 'featuredImage___childImageSharp___fluid___sizes',
    FeaturedImageChildImageSharpFluidOriginalImg = 'featuredImage___childImageSharp___fluid___originalImg',
    FeaturedImageChildImageSharpFluidOriginalName = 'featuredImage___childImageSharp___fluid___originalName',
    FeaturedImageChildImageSharpFluidPresentationWidth = 'featuredImage___childImageSharp___fluid___presentationWidth',
    FeaturedImageChildImageSharpFluidPresentationHeight = 'featuredImage___childImageSharp___fluid___presentationHeight',
    FeaturedImageChildImageSharpSizesBase64 = 'featuredImage___childImageSharp___sizes___base64',
    FeaturedImageChildImageSharpSizesTracedSvg = 'featuredImage___childImageSharp___sizes___tracedSVG',
    FeaturedImageChildImageSharpSizesAspectRatio = 'featuredImage___childImageSharp___sizes___aspectRatio',
    FeaturedImageChildImageSharpSizesSrc = 'featuredImage___childImageSharp___sizes___src',
    FeaturedImageChildImageSharpSizesSrcSet = 'featuredImage___childImageSharp___sizes___srcSet',
    FeaturedImageChildImageSharpSizesSrcWebp = 'featuredImage___childImageSharp___sizes___srcWebp',
    FeaturedImageChildImageSharpSizesSrcSetWebp = 'featuredImage___childImageSharp___sizes___srcSetWebp',
    FeaturedImageChildImageSharpSizesSizes = 'featuredImage___childImageSharp___sizes___sizes',
    FeaturedImageChildImageSharpSizesOriginalImg = 'featuredImage___childImageSharp___sizes___originalImg',
    FeaturedImageChildImageSharpSizesOriginalName = 'featuredImage___childImageSharp___sizes___originalName',
    FeaturedImageChildImageSharpSizesPresentationWidth = 'featuredImage___childImageSharp___sizes___presentationWidth',
    FeaturedImageChildImageSharpSizesPresentationHeight = 'featuredImage___childImageSharp___sizes___presentationHeight',
    FeaturedImageChildImageSharpOriginalWidth = 'featuredImage___childImageSharp___original___width',
    FeaturedImageChildImageSharpOriginalHeight = 'featuredImage___childImageSharp___original___height',
    FeaturedImageChildImageSharpOriginalSrc = 'featuredImage___childImageSharp___original___src',
    FeaturedImageChildImageSharpResizeSrc = 'featuredImage___childImageSharp___resize___src',
    FeaturedImageChildImageSharpResizeTracedSvg = 'featuredImage___childImageSharp___resize___tracedSVG',
    FeaturedImageChildImageSharpResizeWidth = 'featuredImage___childImageSharp___resize___width',
    FeaturedImageChildImageSharpResizeHeight = 'featuredImage___childImageSharp___resize___height',
    FeaturedImageChildImageSharpResizeAspectRatio = 'featuredImage___childImageSharp___resize___aspectRatio',
    FeaturedImageChildImageSharpResizeOriginalName = 'featuredImage___childImageSharp___resize___originalName',
    FeaturedImageChildImageSharpId = 'featuredImage___childImageSharp___id',
    FeaturedImageChildImageSharpParentId = 'featuredImage___childImageSharp___parent___id',
    FeaturedImageChildImageSharpParentChildren = 'featuredImage___childImageSharp___parent___children',
    FeaturedImageChildImageSharpChildren = 'featuredImage___childImageSharp___children',
    FeaturedImageChildImageSharpChildrenId = 'featuredImage___childImageSharp___children___id',
    FeaturedImageChildImageSharpChildrenChildren = 'featuredImage___childImageSharp___children___children',
    FeaturedImageChildImageSharpInternalContent = 'featuredImage___childImageSharp___internal___content',
    FeaturedImageChildImageSharpInternalContentDigest = 'featuredImage___childImageSharp___internal___contentDigest',
    FeaturedImageChildImageSharpInternalDescription = 'featuredImage___childImageSharp___internal___description',
    FeaturedImageChildImageSharpInternalFieldOwners = 'featuredImage___childImageSharp___internal___fieldOwners',
    FeaturedImageChildImageSharpInternalIgnoreType = 'featuredImage___childImageSharp___internal___ignoreType',
    FeaturedImageChildImageSharpInternalMediaType = 'featuredImage___childImageSharp___internal___mediaType',
    FeaturedImageChildImageSharpInternalOwner = 'featuredImage___childImageSharp___internal___owner',
    FeaturedImageChildImageSharpInternalType = 'featuredImage___childImageSharp___internal___type',
    FeaturedImageId = 'featuredImage___id',
    FeaturedImageParentId = 'featuredImage___parent___id',
    FeaturedImageParentParentId = 'featuredImage___parent___parent___id',
    FeaturedImageParentParentChildren = 'featuredImage___parent___parent___children',
    FeaturedImageParentChildren = 'featuredImage___parent___children',
    FeaturedImageParentChildrenId = 'featuredImage___parent___children___id',
    FeaturedImageParentChildrenChildren = 'featuredImage___parent___children___children',
    FeaturedImageParentInternalContent = 'featuredImage___parent___internal___content',
    FeaturedImageParentInternalContentDigest = 'featuredImage___parent___internal___contentDigest',
    FeaturedImageParentInternalDescription = 'featuredImage___parent___internal___description',
    FeaturedImageParentInternalFieldOwners = 'featuredImage___parent___internal___fieldOwners',
    FeaturedImageParentInternalIgnoreType = 'featuredImage___parent___internal___ignoreType',
    FeaturedImageParentInternalMediaType = 'featuredImage___parent___internal___mediaType',
    FeaturedImageParentInternalOwner = 'featuredImage___parent___internal___owner',
    FeaturedImageParentInternalType = 'featuredImage___parent___internal___type',
    FeaturedImageChildren = 'featuredImage___children',
    FeaturedImageChildrenId = 'featuredImage___children___id',
    FeaturedImageChildrenParentId = 'featuredImage___children___parent___id',
    FeaturedImageChildrenParentChildren = 'featuredImage___children___parent___children',
    FeaturedImageChildrenChildren = 'featuredImage___children___children',
    FeaturedImageChildrenChildrenId = 'featuredImage___children___children___id',
    FeaturedImageChildrenChildrenChildren = 'featuredImage___children___children___children',
    FeaturedImageChildrenInternalContent = 'featuredImage___children___internal___content',
    FeaturedImageChildrenInternalContentDigest = 'featuredImage___children___internal___contentDigest',
    FeaturedImageChildrenInternalDescription = 'featuredImage___children___internal___description',
    FeaturedImageChildrenInternalFieldOwners = 'featuredImage___children___internal___fieldOwners',
    FeaturedImageChildrenInternalIgnoreType = 'featuredImage___children___internal___ignoreType',
    FeaturedImageChildrenInternalMediaType = 'featuredImage___children___internal___mediaType',
    FeaturedImageChildrenInternalOwner = 'featuredImage___children___internal___owner',
    FeaturedImageChildrenInternalType = 'featuredImage___children___internal___type',
    FeaturedImageInternalContent = 'featuredImage___internal___content',
    FeaturedImageInternalContentDigest = 'featuredImage___internal___contentDigest',
    FeaturedImageInternalDescription = 'featuredImage___internal___description',
    FeaturedImageInternalFieldOwners = 'featuredImage___internal___fieldOwners',
    FeaturedImageInternalIgnoreType = 'featuredImage___internal___ignoreType',
    FeaturedImageInternalMediaType = 'featuredImage___internal___mediaType',
    FeaturedImageInternalOwner = 'featuredImage___internal___owner',
    FeaturedImageInternalType = 'featuredImage___internal___type',
    FeaturedImageChildMdxRawBody = 'featuredImage___childMdx___rawBody',
    FeaturedImageChildMdxFileAbsolutePath = 'featuredImage___childMdx___fileAbsolutePath',
    FeaturedImageChildMdxFrontmatterTitle = 'featuredImage___childMdx___frontmatter___title',
    FeaturedImageChildMdxFrontmatterExcerpt = 'featuredImage___childMdx___frontmatter___excerpt',
    FeaturedImageChildMdxFrontmatterTags = 'featuredImage___childMdx___frontmatter___tags',
    FeaturedImageChildMdxFrontmatterFeaturedImagePosition = 'featuredImage___childMdx___frontmatter___featuredImagePosition',
    FeaturedImageChildMdxFrontmatterDraft = 'featuredImage___childMdx___frontmatter___draft',
    FeaturedImageChildMdxBody = 'featuredImage___childMdx___body',
    FeaturedImageChildMdxExcerpt = 'featuredImage___childMdx___excerpt',
    FeaturedImageChildMdxHeadings = 'featuredImage___childMdx___headings',
    FeaturedImageChildMdxHeadingsValue = 'featuredImage___childMdx___headings___value',
    FeaturedImageChildMdxHeadingsDepth = 'featuredImage___childMdx___headings___depth',
    FeaturedImageChildMdxHtml = 'featuredImage___childMdx___html',
    FeaturedImageChildMdxMdxAst = 'featuredImage___childMdx___mdxAST',
    FeaturedImageChildMdxTableOfContents = 'featuredImage___childMdx___tableOfContents',
    FeaturedImageChildMdxTimeToRead = 'featuredImage___childMdx___timeToRead',
    FeaturedImageChildMdxWordCountParagraphs = 'featuredImage___childMdx___wordCount___paragraphs',
    FeaturedImageChildMdxWordCountSentences = 'featuredImage___childMdx___wordCount___sentences',
    FeaturedImageChildMdxWordCountWords = 'featuredImage___childMdx___wordCount___words',
    FeaturedImageChildMdxId = 'featuredImage___childMdx___id',
    FeaturedImageChildMdxParentId = 'featuredImage___childMdx___parent___id',
    FeaturedImageChildMdxParentChildren = 'featuredImage___childMdx___parent___children',
    FeaturedImageChildMdxChildren = 'featuredImage___childMdx___children',
    FeaturedImageChildMdxChildrenId = 'featuredImage___childMdx___children___id',
    FeaturedImageChildMdxChildrenChildren = 'featuredImage___childMdx___children___children',
    FeaturedImageChildMdxInternalContent = 'featuredImage___childMdx___internal___content',
    FeaturedImageChildMdxInternalContentDigest = 'featuredImage___childMdx___internal___contentDigest',
    FeaturedImageChildMdxInternalDescription = 'featuredImage___childMdx___internal___description',
    FeaturedImageChildMdxInternalFieldOwners = 'featuredImage___childMdx___internal___fieldOwners',
    FeaturedImageChildMdxInternalIgnoreType = 'featuredImage___childMdx___internal___ignoreType',
    FeaturedImageChildMdxInternalMediaType = 'featuredImage___childMdx___internal___mediaType',
    FeaturedImageChildMdxInternalOwner = 'featuredImage___childMdx___internal___owner',
    FeaturedImageChildMdxInternalType = 'featuredImage___childMdx___internal___type',
    FeaturedImageChildImagesJsonId = 'featuredImage___childImagesJson___id',
    FeaturedImageChildImagesJsonParentId = 'featuredImage___childImagesJson___parent___id',
    FeaturedImageChildImagesJsonParentChildren = 'featuredImage___childImagesJson___parent___children',
    FeaturedImageChildImagesJsonChildren = 'featuredImage___childImagesJson___children',
    FeaturedImageChildImagesJsonChildrenId = 'featuredImage___childImagesJson___children___id',
    FeaturedImageChildImagesJsonChildrenChildren = 'featuredImage___childImagesJson___children___children',
    FeaturedImageChildImagesJsonInternalContent = 'featuredImage___childImagesJson___internal___content',
    FeaturedImageChildImagesJsonInternalContentDigest = 'featuredImage___childImagesJson___internal___contentDigest',
    FeaturedImageChildImagesJsonInternalDescription = 'featuredImage___childImagesJson___internal___description',
    FeaturedImageChildImagesJsonInternalFieldOwners = 'featuredImage___childImagesJson___internal___fieldOwners',
    FeaturedImageChildImagesJsonInternalIgnoreType = 'featuredImage___childImagesJson___internal___ignoreType',
    FeaturedImageChildImagesJsonInternalMediaType = 'featuredImage___childImagesJson___internal___mediaType',
    FeaturedImageChildImagesJsonInternalOwner = 'featuredImage___childImagesJson___internal___owner',
    FeaturedImageChildImagesJsonInternalType = 'featuredImage___childImagesJson___internal___type',
    FeaturedImageChildImagesJsonGallery = 'featuredImage___childImagesJson___gallery',
    FeaturedImageChildImagesJsonGalleryTitle = 'featuredImage___childImagesJson___gallery___title',
    FeaturedImagePosition = 'featuredImagePosition',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type PageFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    draft?: Maybe<BooleanQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    body?: Maybe<StringQueryOperatorInput>;
    featuredImage?: Maybe<FileFilterInput>;
    featuredImagePosition?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type PageGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<PageEdge>;
    nodes: Array<Page>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type PageInfo = {
    currentPage: Scalars['Int'];
    hasPreviousPage: Scalars['Boolean'];
    hasNextPage: Scalars['Boolean'];
    itemCount: Scalars['Int'];
    pageCount: Scalars['Int'];
    perPage?: Maybe<Scalars['Int']>;
};

export type PageSortInput = {
    fields?: Maybe<Array<Maybe<PageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Post = Node & {
    id: Scalars['ID'];
    title: Scalars['String'];
    path: Scalars['String'];
    excerpt: Scalars['String'];
    date: Scalars['Date'];
    body: Scalars['String'];
    tags: Array<Scalars['String']>;
    timeToRead: Scalars['Int'];
    html: Scalars['String'];
    draft?: Maybe<Scalars['Boolean']>;
    featuredImage?: Maybe<File>;
    featuredImagePosition?: Maybe<Scalars['String']>;
    imageFacebook: File;
    imageTwitter: File;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type PostDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type PostConnection = {
    totalCount: Scalars['Int'];
    edges: Array<PostEdge>;
    nodes: Array<Post>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<PostGroupConnection>;
};

export type PostConnectionDistinctArgs = {
    field: PostFieldsEnum;
};

export type PostConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: PostFieldsEnum;
};

export type PostEdge = {
    next?: Maybe<Post>;
    node: Post;
    previous?: Maybe<Post>;
};

export enum PostFieldsEnum {
    Id = 'id',
    Title = 'title',
    Path = 'path',
    Excerpt = 'excerpt',
    Date = 'date',
    Body = 'body',
    Tags = 'tags',
    TimeToRead = 'timeToRead',
    Html = 'html',
    Draft = 'draft',
    FeaturedImageSourceInstanceName = 'featuredImage___sourceInstanceName',
    FeaturedImageAbsolutePath = 'featuredImage___absolutePath',
    FeaturedImageRelativePath = 'featuredImage___relativePath',
    FeaturedImageExtension = 'featuredImage___extension',
    FeaturedImageSize = 'featuredImage___size',
    FeaturedImagePrettySize = 'featuredImage___prettySize',
    FeaturedImageModifiedTime = 'featuredImage___modifiedTime',
    FeaturedImageAccessTime = 'featuredImage___accessTime',
    FeaturedImageChangeTime = 'featuredImage___changeTime',
    FeaturedImageBirthTime = 'featuredImage___birthTime',
    FeaturedImageRoot = 'featuredImage___root',
    FeaturedImageDir = 'featuredImage___dir',
    FeaturedImageBase = 'featuredImage___base',
    FeaturedImageExt = 'featuredImage___ext',
    FeaturedImageName = 'featuredImage___name',
    FeaturedImageRelativeDirectory = 'featuredImage___relativeDirectory',
    FeaturedImageDev = 'featuredImage___dev',
    FeaturedImageMode = 'featuredImage___mode',
    FeaturedImageNlink = 'featuredImage___nlink',
    FeaturedImageUid = 'featuredImage___uid',
    FeaturedImageGid = 'featuredImage___gid',
    FeaturedImageRdev = 'featuredImage___rdev',
    FeaturedImageIno = 'featuredImage___ino',
    FeaturedImageAtimeMs = 'featuredImage___atimeMs',
    FeaturedImageMtimeMs = 'featuredImage___mtimeMs',
    FeaturedImageCtimeMs = 'featuredImage___ctimeMs',
    FeaturedImageAtime = 'featuredImage___atime',
    FeaturedImageMtime = 'featuredImage___mtime',
    FeaturedImageCtime = 'featuredImage___ctime',
    FeaturedImageBirthtime = 'featuredImage___birthtime',
    FeaturedImageBirthtimeMs = 'featuredImage___birthtimeMs',
    FeaturedImageBlksize = 'featuredImage___blksize',
    FeaturedImageBlocks = 'featuredImage___blocks',
    FeaturedImagePublicUrl = 'featuredImage___publicURL',
    FeaturedImageChildImageSharpFixedBase64 = 'featuredImage___childImageSharp___fixed___base64',
    FeaturedImageChildImageSharpFixedTracedSvg = 'featuredImage___childImageSharp___fixed___tracedSVG',
    FeaturedImageChildImageSharpFixedAspectRatio = 'featuredImage___childImageSharp___fixed___aspectRatio',
    FeaturedImageChildImageSharpFixedWidth = 'featuredImage___childImageSharp___fixed___width',
    FeaturedImageChildImageSharpFixedHeight = 'featuredImage___childImageSharp___fixed___height',
    FeaturedImageChildImageSharpFixedSrc = 'featuredImage___childImageSharp___fixed___src',
    FeaturedImageChildImageSharpFixedSrcSet = 'featuredImage___childImageSharp___fixed___srcSet',
    FeaturedImageChildImageSharpFixedSrcWebp = 'featuredImage___childImageSharp___fixed___srcWebp',
    FeaturedImageChildImageSharpFixedSrcSetWebp = 'featuredImage___childImageSharp___fixed___srcSetWebp',
    FeaturedImageChildImageSharpFixedOriginalName = 'featuredImage___childImageSharp___fixed___originalName',
    FeaturedImageChildImageSharpResolutionsBase64 = 'featuredImage___childImageSharp___resolutions___base64',
    FeaturedImageChildImageSharpResolutionsTracedSvg = 'featuredImage___childImageSharp___resolutions___tracedSVG',
    FeaturedImageChildImageSharpResolutionsAspectRatio = 'featuredImage___childImageSharp___resolutions___aspectRatio',
    FeaturedImageChildImageSharpResolutionsWidth = 'featuredImage___childImageSharp___resolutions___width',
    FeaturedImageChildImageSharpResolutionsHeight = 'featuredImage___childImageSharp___resolutions___height',
    FeaturedImageChildImageSharpResolutionsSrc = 'featuredImage___childImageSharp___resolutions___src',
    FeaturedImageChildImageSharpResolutionsSrcSet = 'featuredImage___childImageSharp___resolutions___srcSet',
    FeaturedImageChildImageSharpResolutionsSrcWebp = 'featuredImage___childImageSharp___resolutions___srcWebp',
    FeaturedImageChildImageSharpResolutionsSrcSetWebp = 'featuredImage___childImageSharp___resolutions___srcSetWebp',
    FeaturedImageChildImageSharpResolutionsOriginalName = 'featuredImage___childImageSharp___resolutions___originalName',
    FeaturedImageChildImageSharpFluidBase64 = 'featuredImage___childImageSharp___fluid___base64',
    FeaturedImageChildImageSharpFluidTracedSvg = 'featuredImage___childImageSharp___fluid___tracedSVG',
    FeaturedImageChildImageSharpFluidAspectRatio = 'featuredImage___childImageSharp___fluid___aspectRatio',
    FeaturedImageChildImageSharpFluidSrc = 'featuredImage___childImageSharp___fluid___src',
    FeaturedImageChildImageSharpFluidSrcSet = 'featuredImage___childImageSharp___fluid___srcSet',
    FeaturedImageChildImageSharpFluidSrcWebp = 'featuredImage___childImageSharp___fluid___srcWebp',
    FeaturedImageChildImageSharpFluidSrcSetWebp = 'featuredImage___childImageSharp___fluid___srcSetWebp',
    FeaturedImageChildImageSharpFluidSizes = 'featuredImage___childImageSharp___fluid___sizes',
    FeaturedImageChildImageSharpFluidOriginalImg = 'featuredImage___childImageSharp___fluid___originalImg',
    FeaturedImageChildImageSharpFluidOriginalName = 'featuredImage___childImageSharp___fluid___originalName',
    FeaturedImageChildImageSharpFluidPresentationWidth = 'featuredImage___childImageSharp___fluid___presentationWidth',
    FeaturedImageChildImageSharpFluidPresentationHeight = 'featuredImage___childImageSharp___fluid___presentationHeight',
    FeaturedImageChildImageSharpSizesBase64 = 'featuredImage___childImageSharp___sizes___base64',
    FeaturedImageChildImageSharpSizesTracedSvg = 'featuredImage___childImageSharp___sizes___tracedSVG',
    FeaturedImageChildImageSharpSizesAspectRatio = 'featuredImage___childImageSharp___sizes___aspectRatio',
    FeaturedImageChildImageSharpSizesSrc = 'featuredImage___childImageSharp___sizes___src',
    FeaturedImageChildImageSharpSizesSrcSet = 'featuredImage___childImageSharp___sizes___srcSet',
    FeaturedImageChildImageSharpSizesSrcWebp = 'featuredImage___childImageSharp___sizes___srcWebp',
    FeaturedImageChildImageSharpSizesSrcSetWebp = 'featuredImage___childImageSharp___sizes___srcSetWebp',
    FeaturedImageChildImageSharpSizesSizes = 'featuredImage___childImageSharp___sizes___sizes',
    FeaturedImageChildImageSharpSizesOriginalImg = 'featuredImage___childImageSharp___sizes___originalImg',
    FeaturedImageChildImageSharpSizesOriginalName = 'featuredImage___childImageSharp___sizes___originalName',
    FeaturedImageChildImageSharpSizesPresentationWidth = 'featuredImage___childImageSharp___sizes___presentationWidth',
    FeaturedImageChildImageSharpSizesPresentationHeight = 'featuredImage___childImageSharp___sizes___presentationHeight',
    FeaturedImageChildImageSharpOriginalWidth = 'featuredImage___childImageSharp___original___width',
    FeaturedImageChildImageSharpOriginalHeight = 'featuredImage___childImageSharp___original___height',
    FeaturedImageChildImageSharpOriginalSrc = 'featuredImage___childImageSharp___original___src',
    FeaturedImageChildImageSharpResizeSrc = 'featuredImage___childImageSharp___resize___src',
    FeaturedImageChildImageSharpResizeTracedSvg = 'featuredImage___childImageSharp___resize___tracedSVG',
    FeaturedImageChildImageSharpResizeWidth = 'featuredImage___childImageSharp___resize___width',
    FeaturedImageChildImageSharpResizeHeight = 'featuredImage___childImageSharp___resize___height',
    FeaturedImageChildImageSharpResizeAspectRatio = 'featuredImage___childImageSharp___resize___aspectRatio',
    FeaturedImageChildImageSharpResizeOriginalName = 'featuredImage___childImageSharp___resize___originalName',
    FeaturedImageChildImageSharpId = 'featuredImage___childImageSharp___id',
    FeaturedImageChildImageSharpParentId = 'featuredImage___childImageSharp___parent___id',
    FeaturedImageChildImageSharpParentChildren = 'featuredImage___childImageSharp___parent___children',
    FeaturedImageChildImageSharpChildren = 'featuredImage___childImageSharp___children',
    FeaturedImageChildImageSharpChildrenId = 'featuredImage___childImageSharp___children___id',
    FeaturedImageChildImageSharpChildrenChildren = 'featuredImage___childImageSharp___children___children',
    FeaturedImageChildImageSharpInternalContent = 'featuredImage___childImageSharp___internal___content',
    FeaturedImageChildImageSharpInternalContentDigest = 'featuredImage___childImageSharp___internal___contentDigest',
    FeaturedImageChildImageSharpInternalDescription = 'featuredImage___childImageSharp___internal___description',
    FeaturedImageChildImageSharpInternalFieldOwners = 'featuredImage___childImageSharp___internal___fieldOwners',
    FeaturedImageChildImageSharpInternalIgnoreType = 'featuredImage___childImageSharp___internal___ignoreType',
    FeaturedImageChildImageSharpInternalMediaType = 'featuredImage___childImageSharp___internal___mediaType',
    FeaturedImageChildImageSharpInternalOwner = 'featuredImage___childImageSharp___internal___owner',
    FeaturedImageChildImageSharpInternalType = 'featuredImage___childImageSharp___internal___type',
    FeaturedImageId = 'featuredImage___id',
    FeaturedImageParentId = 'featuredImage___parent___id',
    FeaturedImageParentParentId = 'featuredImage___parent___parent___id',
    FeaturedImageParentParentChildren = 'featuredImage___parent___parent___children',
    FeaturedImageParentChildren = 'featuredImage___parent___children',
    FeaturedImageParentChildrenId = 'featuredImage___parent___children___id',
    FeaturedImageParentChildrenChildren = 'featuredImage___parent___children___children',
    FeaturedImageParentInternalContent = 'featuredImage___parent___internal___content',
    FeaturedImageParentInternalContentDigest = 'featuredImage___parent___internal___contentDigest',
    FeaturedImageParentInternalDescription = 'featuredImage___parent___internal___description',
    FeaturedImageParentInternalFieldOwners = 'featuredImage___parent___internal___fieldOwners',
    FeaturedImageParentInternalIgnoreType = 'featuredImage___parent___internal___ignoreType',
    FeaturedImageParentInternalMediaType = 'featuredImage___parent___internal___mediaType',
    FeaturedImageParentInternalOwner = 'featuredImage___parent___internal___owner',
    FeaturedImageParentInternalType = 'featuredImage___parent___internal___type',
    FeaturedImageChildren = 'featuredImage___children',
    FeaturedImageChildrenId = 'featuredImage___children___id',
    FeaturedImageChildrenParentId = 'featuredImage___children___parent___id',
    FeaturedImageChildrenParentChildren = 'featuredImage___children___parent___children',
    FeaturedImageChildrenChildren = 'featuredImage___children___children',
    FeaturedImageChildrenChildrenId = 'featuredImage___children___children___id',
    FeaturedImageChildrenChildrenChildren = 'featuredImage___children___children___children',
    FeaturedImageChildrenInternalContent = 'featuredImage___children___internal___content',
    FeaturedImageChildrenInternalContentDigest = 'featuredImage___children___internal___contentDigest',
    FeaturedImageChildrenInternalDescription = 'featuredImage___children___internal___description',
    FeaturedImageChildrenInternalFieldOwners = 'featuredImage___children___internal___fieldOwners',
    FeaturedImageChildrenInternalIgnoreType = 'featuredImage___children___internal___ignoreType',
    FeaturedImageChildrenInternalMediaType = 'featuredImage___children___internal___mediaType',
    FeaturedImageChildrenInternalOwner = 'featuredImage___children___internal___owner',
    FeaturedImageChildrenInternalType = 'featuredImage___children___internal___type',
    FeaturedImageInternalContent = 'featuredImage___internal___content',
    FeaturedImageInternalContentDigest = 'featuredImage___internal___contentDigest',
    FeaturedImageInternalDescription = 'featuredImage___internal___description',
    FeaturedImageInternalFieldOwners = 'featuredImage___internal___fieldOwners',
    FeaturedImageInternalIgnoreType = 'featuredImage___internal___ignoreType',
    FeaturedImageInternalMediaType = 'featuredImage___internal___mediaType',
    FeaturedImageInternalOwner = 'featuredImage___internal___owner',
    FeaturedImageInternalType = 'featuredImage___internal___type',
    FeaturedImageChildMdxRawBody = 'featuredImage___childMdx___rawBody',
    FeaturedImageChildMdxFileAbsolutePath = 'featuredImage___childMdx___fileAbsolutePath',
    FeaturedImageChildMdxFrontmatterTitle = 'featuredImage___childMdx___frontmatter___title',
    FeaturedImageChildMdxFrontmatterExcerpt = 'featuredImage___childMdx___frontmatter___excerpt',
    FeaturedImageChildMdxFrontmatterTags = 'featuredImage___childMdx___frontmatter___tags',
    FeaturedImageChildMdxFrontmatterFeaturedImagePosition = 'featuredImage___childMdx___frontmatter___featuredImagePosition',
    FeaturedImageChildMdxFrontmatterDraft = 'featuredImage___childMdx___frontmatter___draft',
    FeaturedImageChildMdxBody = 'featuredImage___childMdx___body',
    FeaturedImageChildMdxExcerpt = 'featuredImage___childMdx___excerpt',
    FeaturedImageChildMdxHeadings = 'featuredImage___childMdx___headings',
    FeaturedImageChildMdxHeadingsValue = 'featuredImage___childMdx___headings___value',
    FeaturedImageChildMdxHeadingsDepth = 'featuredImage___childMdx___headings___depth',
    FeaturedImageChildMdxHtml = 'featuredImage___childMdx___html',
    FeaturedImageChildMdxMdxAst = 'featuredImage___childMdx___mdxAST',
    FeaturedImageChildMdxTableOfContents = 'featuredImage___childMdx___tableOfContents',
    FeaturedImageChildMdxTimeToRead = 'featuredImage___childMdx___timeToRead',
    FeaturedImageChildMdxWordCountParagraphs = 'featuredImage___childMdx___wordCount___paragraphs',
    FeaturedImageChildMdxWordCountSentences = 'featuredImage___childMdx___wordCount___sentences',
    FeaturedImageChildMdxWordCountWords = 'featuredImage___childMdx___wordCount___words',
    FeaturedImageChildMdxId = 'featuredImage___childMdx___id',
    FeaturedImageChildMdxParentId = 'featuredImage___childMdx___parent___id',
    FeaturedImageChildMdxParentChildren = 'featuredImage___childMdx___parent___children',
    FeaturedImageChildMdxChildren = 'featuredImage___childMdx___children',
    FeaturedImageChildMdxChildrenId = 'featuredImage___childMdx___children___id',
    FeaturedImageChildMdxChildrenChildren = 'featuredImage___childMdx___children___children',
    FeaturedImageChildMdxInternalContent = 'featuredImage___childMdx___internal___content',
    FeaturedImageChildMdxInternalContentDigest = 'featuredImage___childMdx___internal___contentDigest',
    FeaturedImageChildMdxInternalDescription = 'featuredImage___childMdx___internal___description',
    FeaturedImageChildMdxInternalFieldOwners = 'featuredImage___childMdx___internal___fieldOwners',
    FeaturedImageChildMdxInternalIgnoreType = 'featuredImage___childMdx___internal___ignoreType',
    FeaturedImageChildMdxInternalMediaType = 'featuredImage___childMdx___internal___mediaType',
    FeaturedImageChildMdxInternalOwner = 'featuredImage___childMdx___internal___owner',
    FeaturedImageChildMdxInternalType = 'featuredImage___childMdx___internal___type',
    FeaturedImageChildImagesJsonId = 'featuredImage___childImagesJson___id',
    FeaturedImageChildImagesJsonParentId = 'featuredImage___childImagesJson___parent___id',
    FeaturedImageChildImagesJsonParentChildren = 'featuredImage___childImagesJson___parent___children',
    FeaturedImageChildImagesJsonChildren = 'featuredImage___childImagesJson___children',
    FeaturedImageChildImagesJsonChildrenId = 'featuredImage___childImagesJson___children___id',
    FeaturedImageChildImagesJsonChildrenChildren = 'featuredImage___childImagesJson___children___children',
    FeaturedImageChildImagesJsonInternalContent = 'featuredImage___childImagesJson___internal___content',
    FeaturedImageChildImagesJsonInternalContentDigest = 'featuredImage___childImagesJson___internal___contentDigest',
    FeaturedImageChildImagesJsonInternalDescription = 'featuredImage___childImagesJson___internal___description',
    FeaturedImageChildImagesJsonInternalFieldOwners = 'featuredImage___childImagesJson___internal___fieldOwners',
    FeaturedImageChildImagesJsonInternalIgnoreType = 'featuredImage___childImagesJson___internal___ignoreType',
    FeaturedImageChildImagesJsonInternalMediaType = 'featuredImage___childImagesJson___internal___mediaType',
    FeaturedImageChildImagesJsonInternalOwner = 'featuredImage___childImagesJson___internal___owner',
    FeaturedImageChildImagesJsonInternalType = 'featuredImage___childImagesJson___internal___type',
    FeaturedImageChildImagesJsonGallery = 'featuredImage___childImagesJson___gallery',
    FeaturedImageChildImagesJsonGalleryTitle = 'featuredImage___childImagesJson___gallery___title',
    FeaturedImagePosition = 'featuredImagePosition',
    ImageFacebookSourceInstanceName = 'imageFacebook___sourceInstanceName',
    ImageFacebookAbsolutePath = 'imageFacebook___absolutePath',
    ImageFacebookRelativePath = 'imageFacebook___relativePath',
    ImageFacebookExtension = 'imageFacebook___extension',
    ImageFacebookSize = 'imageFacebook___size',
    ImageFacebookPrettySize = 'imageFacebook___prettySize',
    ImageFacebookModifiedTime = 'imageFacebook___modifiedTime',
    ImageFacebookAccessTime = 'imageFacebook___accessTime',
    ImageFacebookChangeTime = 'imageFacebook___changeTime',
    ImageFacebookBirthTime = 'imageFacebook___birthTime',
    ImageFacebookRoot = 'imageFacebook___root',
    ImageFacebookDir = 'imageFacebook___dir',
    ImageFacebookBase = 'imageFacebook___base',
    ImageFacebookExt = 'imageFacebook___ext',
    ImageFacebookName = 'imageFacebook___name',
    ImageFacebookRelativeDirectory = 'imageFacebook___relativeDirectory',
    ImageFacebookDev = 'imageFacebook___dev',
    ImageFacebookMode = 'imageFacebook___mode',
    ImageFacebookNlink = 'imageFacebook___nlink',
    ImageFacebookUid = 'imageFacebook___uid',
    ImageFacebookGid = 'imageFacebook___gid',
    ImageFacebookRdev = 'imageFacebook___rdev',
    ImageFacebookIno = 'imageFacebook___ino',
    ImageFacebookAtimeMs = 'imageFacebook___atimeMs',
    ImageFacebookMtimeMs = 'imageFacebook___mtimeMs',
    ImageFacebookCtimeMs = 'imageFacebook___ctimeMs',
    ImageFacebookAtime = 'imageFacebook___atime',
    ImageFacebookMtime = 'imageFacebook___mtime',
    ImageFacebookCtime = 'imageFacebook___ctime',
    ImageFacebookBirthtime = 'imageFacebook___birthtime',
    ImageFacebookBirthtimeMs = 'imageFacebook___birthtimeMs',
    ImageFacebookBlksize = 'imageFacebook___blksize',
    ImageFacebookBlocks = 'imageFacebook___blocks',
    ImageFacebookPublicUrl = 'imageFacebook___publicURL',
    ImageFacebookChildImageSharpFixedBase64 = 'imageFacebook___childImageSharp___fixed___base64',
    ImageFacebookChildImageSharpFixedTracedSvg = 'imageFacebook___childImageSharp___fixed___tracedSVG',
    ImageFacebookChildImageSharpFixedAspectRatio = 'imageFacebook___childImageSharp___fixed___aspectRatio',
    ImageFacebookChildImageSharpFixedWidth = 'imageFacebook___childImageSharp___fixed___width',
    ImageFacebookChildImageSharpFixedHeight = 'imageFacebook___childImageSharp___fixed___height',
    ImageFacebookChildImageSharpFixedSrc = 'imageFacebook___childImageSharp___fixed___src',
    ImageFacebookChildImageSharpFixedSrcSet = 'imageFacebook___childImageSharp___fixed___srcSet',
    ImageFacebookChildImageSharpFixedSrcWebp = 'imageFacebook___childImageSharp___fixed___srcWebp',
    ImageFacebookChildImageSharpFixedSrcSetWebp = 'imageFacebook___childImageSharp___fixed___srcSetWebp',
    ImageFacebookChildImageSharpFixedOriginalName = 'imageFacebook___childImageSharp___fixed___originalName',
    ImageFacebookChildImageSharpResolutionsBase64 = 'imageFacebook___childImageSharp___resolutions___base64',
    ImageFacebookChildImageSharpResolutionsTracedSvg = 'imageFacebook___childImageSharp___resolutions___tracedSVG',
    ImageFacebookChildImageSharpResolutionsAspectRatio = 'imageFacebook___childImageSharp___resolutions___aspectRatio',
    ImageFacebookChildImageSharpResolutionsWidth = 'imageFacebook___childImageSharp___resolutions___width',
    ImageFacebookChildImageSharpResolutionsHeight = 'imageFacebook___childImageSharp___resolutions___height',
    ImageFacebookChildImageSharpResolutionsSrc = 'imageFacebook___childImageSharp___resolutions___src',
    ImageFacebookChildImageSharpResolutionsSrcSet = 'imageFacebook___childImageSharp___resolutions___srcSet',
    ImageFacebookChildImageSharpResolutionsSrcWebp = 'imageFacebook___childImageSharp___resolutions___srcWebp',
    ImageFacebookChildImageSharpResolutionsSrcSetWebp = 'imageFacebook___childImageSharp___resolutions___srcSetWebp',
    ImageFacebookChildImageSharpResolutionsOriginalName = 'imageFacebook___childImageSharp___resolutions___originalName',
    ImageFacebookChildImageSharpFluidBase64 = 'imageFacebook___childImageSharp___fluid___base64',
    ImageFacebookChildImageSharpFluidTracedSvg = 'imageFacebook___childImageSharp___fluid___tracedSVG',
    ImageFacebookChildImageSharpFluidAspectRatio = 'imageFacebook___childImageSharp___fluid___aspectRatio',
    ImageFacebookChildImageSharpFluidSrc = 'imageFacebook___childImageSharp___fluid___src',
    ImageFacebookChildImageSharpFluidSrcSet = 'imageFacebook___childImageSharp___fluid___srcSet',
    ImageFacebookChildImageSharpFluidSrcWebp = 'imageFacebook___childImageSharp___fluid___srcWebp',
    ImageFacebookChildImageSharpFluidSrcSetWebp = 'imageFacebook___childImageSharp___fluid___srcSetWebp',
    ImageFacebookChildImageSharpFluidSizes = 'imageFacebook___childImageSharp___fluid___sizes',
    ImageFacebookChildImageSharpFluidOriginalImg = 'imageFacebook___childImageSharp___fluid___originalImg',
    ImageFacebookChildImageSharpFluidOriginalName = 'imageFacebook___childImageSharp___fluid___originalName',
    ImageFacebookChildImageSharpFluidPresentationWidth = 'imageFacebook___childImageSharp___fluid___presentationWidth',
    ImageFacebookChildImageSharpFluidPresentationHeight = 'imageFacebook___childImageSharp___fluid___presentationHeight',
    ImageFacebookChildImageSharpSizesBase64 = 'imageFacebook___childImageSharp___sizes___base64',
    ImageFacebookChildImageSharpSizesTracedSvg = 'imageFacebook___childImageSharp___sizes___tracedSVG',
    ImageFacebookChildImageSharpSizesAspectRatio = 'imageFacebook___childImageSharp___sizes___aspectRatio',
    ImageFacebookChildImageSharpSizesSrc = 'imageFacebook___childImageSharp___sizes___src',
    ImageFacebookChildImageSharpSizesSrcSet = 'imageFacebook___childImageSharp___sizes___srcSet',
    ImageFacebookChildImageSharpSizesSrcWebp = 'imageFacebook___childImageSharp___sizes___srcWebp',
    ImageFacebookChildImageSharpSizesSrcSetWebp = 'imageFacebook___childImageSharp___sizes___srcSetWebp',
    ImageFacebookChildImageSharpSizesSizes = 'imageFacebook___childImageSharp___sizes___sizes',
    ImageFacebookChildImageSharpSizesOriginalImg = 'imageFacebook___childImageSharp___sizes___originalImg',
    ImageFacebookChildImageSharpSizesOriginalName = 'imageFacebook___childImageSharp___sizes___originalName',
    ImageFacebookChildImageSharpSizesPresentationWidth = 'imageFacebook___childImageSharp___sizes___presentationWidth',
    ImageFacebookChildImageSharpSizesPresentationHeight = 'imageFacebook___childImageSharp___sizes___presentationHeight',
    ImageFacebookChildImageSharpOriginalWidth = 'imageFacebook___childImageSharp___original___width',
    ImageFacebookChildImageSharpOriginalHeight = 'imageFacebook___childImageSharp___original___height',
    ImageFacebookChildImageSharpOriginalSrc = 'imageFacebook___childImageSharp___original___src',
    ImageFacebookChildImageSharpResizeSrc = 'imageFacebook___childImageSharp___resize___src',
    ImageFacebookChildImageSharpResizeTracedSvg = 'imageFacebook___childImageSharp___resize___tracedSVG',
    ImageFacebookChildImageSharpResizeWidth = 'imageFacebook___childImageSharp___resize___width',
    ImageFacebookChildImageSharpResizeHeight = 'imageFacebook___childImageSharp___resize___height',
    ImageFacebookChildImageSharpResizeAspectRatio = 'imageFacebook___childImageSharp___resize___aspectRatio',
    ImageFacebookChildImageSharpResizeOriginalName = 'imageFacebook___childImageSharp___resize___originalName',
    ImageFacebookChildImageSharpId = 'imageFacebook___childImageSharp___id',
    ImageFacebookChildImageSharpParentId = 'imageFacebook___childImageSharp___parent___id',
    ImageFacebookChildImageSharpParentChildren = 'imageFacebook___childImageSharp___parent___children',
    ImageFacebookChildImageSharpChildren = 'imageFacebook___childImageSharp___children',
    ImageFacebookChildImageSharpChildrenId = 'imageFacebook___childImageSharp___children___id',
    ImageFacebookChildImageSharpChildrenChildren = 'imageFacebook___childImageSharp___children___children',
    ImageFacebookChildImageSharpInternalContent = 'imageFacebook___childImageSharp___internal___content',
    ImageFacebookChildImageSharpInternalContentDigest = 'imageFacebook___childImageSharp___internal___contentDigest',
    ImageFacebookChildImageSharpInternalDescription = 'imageFacebook___childImageSharp___internal___description',
    ImageFacebookChildImageSharpInternalFieldOwners = 'imageFacebook___childImageSharp___internal___fieldOwners',
    ImageFacebookChildImageSharpInternalIgnoreType = 'imageFacebook___childImageSharp___internal___ignoreType',
    ImageFacebookChildImageSharpInternalMediaType = 'imageFacebook___childImageSharp___internal___mediaType',
    ImageFacebookChildImageSharpInternalOwner = 'imageFacebook___childImageSharp___internal___owner',
    ImageFacebookChildImageSharpInternalType = 'imageFacebook___childImageSharp___internal___type',
    ImageFacebookId = 'imageFacebook___id',
    ImageFacebookParentId = 'imageFacebook___parent___id',
    ImageFacebookParentParentId = 'imageFacebook___parent___parent___id',
    ImageFacebookParentParentChildren = 'imageFacebook___parent___parent___children',
    ImageFacebookParentChildren = 'imageFacebook___parent___children',
    ImageFacebookParentChildrenId = 'imageFacebook___parent___children___id',
    ImageFacebookParentChildrenChildren = 'imageFacebook___parent___children___children',
    ImageFacebookParentInternalContent = 'imageFacebook___parent___internal___content',
    ImageFacebookParentInternalContentDigest = 'imageFacebook___parent___internal___contentDigest',
    ImageFacebookParentInternalDescription = 'imageFacebook___parent___internal___description',
    ImageFacebookParentInternalFieldOwners = 'imageFacebook___parent___internal___fieldOwners',
    ImageFacebookParentInternalIgnoreType = 'imageFacebook___parent___internal___ignoreType',
    ImageFacebookParentInternalMediaType = 'imageFacebook___parent___internal___mediaType',
    ImageFacebookParentInternalOwner = 'imageFacebook___parent___internal___owner',
    ImageFacebookParentInternalType = 'imageFacebook___parent___internal___type',
    ImageFacebookChildren = 'imageFacebook___children',
    ImageFacebookChildrenId = 'imageFacebook___children___id',
    ImageFacebookChildrenParentId = 'imageFacebook___children___parent___id',
    ImageFacebookChildrenParentChildren = 'imageFacebook___children___parent___children',
    ImageFacebookChildrenChildren = 'imageFacebook___children___children',
    ImageFacebookChildrenChildrenId = 'imageFacebook___children___children___id',
    ImageFacebookChildrenChildrenChildren = 'imageFacebook___children___children___children',
    ImageFacebookChildrenInternalContent = 'imageFacebook___children___internal___content',
    ImageFacebookChildrenInternalContentDigest = 'imageFacebook___children___internal___contentDigest',
    ImageFacebookChildrenInternalDescription = 'imageFacebook___children___internal___description',
    ImageFacebookChildrenInternalFieldOwners = 'imageFacebook___children___internal___fieldOwners',
    ImageFacebookChildrenInternalIgnoreType = 'imageFacebook___children___internal___ignoreType',
    ImageFacebookChildrenInternalMediaType = 'imageFacebook___children___internal___mediaType',
    ImageFacebookChildrenInternalOwner = 'imageFacebook___children___internal___owner',
    ImageFacebookChildrenInternalType = 'imageFacebook___children___internal___type',
    ImageFacebookInternalContent = 'imageFacebook___internal___content',
    ImageFacebookInternalContentDigest = 'imageFacebook___internal___contentDigest',
    ImageFacebookInternalDescription = 'imageFacebook___internal___description',
    ImageFacebookInternalFieldOwners = 'imageFacebook___internal___fieldOwners',
    ImageFacebookInternalIgnoreType = 'imageFacebook___internal___ignoreType',
    ImageFacebookInternalMediaType = 'imageFacebook___internal___mediaType',
    ImageFacebookInternalOwner = 'imageFacebook___internal___owner',
    ImageFacebookInternalType = 'imageFacebook___internal___type',
    ImageFacebookChildMdxRawBody = 'imageFacebook___childMdx___rawBody',
    ImageFacebookChildMdxFileAbsolutePath = 'imageFacebook___childMdx___fileAbsolutePath',
    ImageFacebookChildMdxFrontmatterTitle = 'imageFacebook___childMdx___frontmatter___title',
    ImageFacebookChildMdxFrontmatterExcerpt = 'imageFacebook___childMdx___frontmatter___excerpt',
    ImageFacebookChildMdxFrontmatterTags = 'imageFacebook___childMdx___frontmatter___tags',
    ImageFacebookChildMdxFrontmatterFeaturedImagePosition = 'imageFacebook___childMdx___frontmatter___featuredImagePosition',
    ImageFacebookChildMdxFrontmatterDraft = 'imageFacebook___childMdx___frontmatter___draft',
    ImageFacebookChildMdxBody = 'imageFacebook___childMdx___body',
    ImageFacebookChildMdxExcerpt = 'imageFacebook___childMdx___excerpt',
    ImageFacebookChildMdxHeadings = 'imageFacebook___childMdx___headings',
    ImageFacebookChildMdxHeadingsValue = 'imageFacebook___childMdx___headings___value',
    ImageFacebookChildMdxHeadingsDepth = 'imageFacebook___childMdx___headings___depth',
    ImageFacebookChildMdxHtml = 'imageFacebook___childMdx___html',
    ImageFacebookChildMdxMdxAst = 'imageFacebook___childMdx___mdxAST',
    ImageFacebookChildMdxTableOfContents = 'imageFacebook___childMdx___tableOfContents',
    ImageFacebookChildMdxTimeToRead = 'imageFacebook___childMdx___timeToRead',
    ImageFacebookChildMdxWordCountParagraphs = 'imageFacebook___childMdx___wordCount___paragraphs',
    ImageFacebookChildMdxWordCountSentences = 'imageFacebook___childMdx___wordCount___sentences',
    ImageFacebookChildMdxWordCountWords = 'imageFacebook___childMdx___wordCount___words',
    ImageFacebookChildMdxId = 'imageFacebook___childMdx___id',
    ImageFacebookChildMdxParentId = 'imageFacebook___childMdx___parent___id',
    ImageFacebookChildMdxParentChildren = 'imageFacebook___childMdx___parent___children',
    ImageFacebookChildMdxChildren = 'imageFacebook___childMdx___children',
    ImageFacebookChildMdxChildrenId = 'imageFacebook___childMdx___children___id',
    ImageFacebookChildMdxChildrenChildren = 'imageFacebook___childMdx___children___children',
    ImageFacebookChildMdxInternalContent = 'imageFacebook___childMdx___internal___content',
    ImageFacebookChildMdxInternalContentDigest = 'imageFacebook___childMdx___internal___contentDigest',
    ImageFacebookChildMdxInternalDescription = 'imageFacebook___childMdx___internal___description',
    ImageFacebookChildMdxInternalFieldOwners = 'imageFacebook___childMdx___internal___fieldOwners',
    ImageFacebookChildMdxInternalIgnoreType = 'imageFacebook___childMdx___internal___ignoreType',
    ImageFacebookChildMdxInternalMediaType = 'imageFacebook___childMdx___internal___mediaType',
    ImageFacebookChildMdxInternalOwner = 'imageFacebook___childMdx___internal___owner',
    ImageFacebookChildMdxInternalType = 'imageFacebook___childMdx___internal___type',
    ImageFacebookChildImagesJsonId = 'imageFacebook___childImagesJson___id',
    ImageFacebookChildImagesJsonParentId = 'imageFacebook___childImagesJson___parent___id',
    ImageFacebookChildImagesJsonParentChildren = 'imageFacebook___childImagesJson___parent___children',
    ImageFacebookChildImagesJsonChildren = 'imageFacebook___childImagesJson___children',
    ImageFacebookChildImagesJsonChildrenId = 'imageFacebook___childImagesJson___children___id',
    ImageFacebookChildImagesJsonChildrenChildren = 'imageFacebook___childImagesJson___children___children',
    ImageFacebookChildImagesJsonInternalContent = 'imageFacebook___childImagesJson___internal___content',
    ImageFacebookChildImagesJsonInternalContentDigest = 'imageFacebook___childImagesJson___internal___contentDigest',
    ImageFacebookChildImagesJsonInternalDescription = 'imageFacebook___childImagesJson___internal___description',
    ImageFacebookChildImagesJsonInternalFieldOwners = 'imageFacebook___childImagesJson___internal___fieldOwners',
    ImageFacebookChildImagesJsonInternalIgnoreType = 'imageFacebook___childImagesJson___internal___ignoreType',
    ImageFacebookChildImagesJsonInternalMediaType = 'imageFacebook___childImagesJson___internal___mediaType',
    ImageFacebookChildImagesJsonInternalOwner = 'imageFacebook___childImagesJson___internal___owner',
    ImageFacebookChildImagesJsonInternalType = 'imageFacebook___childImagesJson___internal___type',
    ImageFacebookChildImagesJsonGallery = 'imageFacebook___childImagesJson___gallery',
    ImageFacebookChildImagesJsonGalleryTitle = 'imageFacebook___childImagesJson___gallery___title',
    ImageTwitterSourceInstanceName = 'imageTwitter___sourceInstanceName',
    ImageTwitterAbsolutePath = 'imageTwitter___absolutePath',
    ImageTwitterRelativePath = 'imageTwitter___relativePath',
    ImageTwitterExtension = 'imageTwitter___extension',
    ImageTwitterSize = 'imageTwitter___size',
    ImageTwitterPrettySize = 'imageTwitter___prettySize',
    ImageTwitterModifiedTime = 'imageTwitter___modifiedTime',
    ImageTwitterAccessTime = 'imageTwitter___accessTime',
    ImageTwitterChangeTime = 'imageTwitter___changeTime',
    ImageTwitterBirthTime = 'imageTwitter___birthTime',
    ImageTwitterRoot = 'imageTwitter___root',
    ImageTwitterDir = 'imageTwitter___dir',
    ImageTwitterBase = 'imageTwitter___base',
    ImageTwitterExt = 'imageTwitter___ext',
    ImageTwitterName = 'imageTwitter___name',
    ImageTwitterRelativeDirectory = 'imageTwitter___relativeDirectory',
    ImageTwitterDev = 'imageTwitter___dev',
    ImageTwitterMode = 'imageTwitter___mode',
    ImageTwitterNlink = 'imageTwitter___nlink',
    ImageTwitterUid = 'imageTwitter___uid',
    ImageTwitterGid = 'imageTwitter___gid',
    ImageTwitterRdev = 'imageTwitter___rdev',
    ImageTwitterIno = 'imageTwitter___ino',
    ImageTwitterAtimeMs = 'imageTwitter___atimeMs',
    ImageTwitterMtimeMs = 'imageTwitter___mtimeMs',
    ImageTwitterCtimeMs = 'imageTwitter___ctimeMs',
    ImageTwitterAtime = 'imageTwitter___atime',
    ImageTwitterMtime = 'imageTwitter___mtime',
    ImageTwitterCtime = 'imageTwitter___ctime',
    ImageTwitterBirthtime = 'imageTwitter___birthtime',
    ImageTwitterBirthtimeMs = 'imageTwitter___birthtimeMs',
    ImageTwitterBlksize = 'imageTwitter___blksize',
    ImageTwitterBlocks = 'imageTwitter___blocks',
    ImageTwitterPublicUrl = 'imageTwitter___publicURL',
    ImageTwitterChildImageSharpFixedBase64 = 'imageTwitter___childImageSharp___fixed___base64',
    ImageTwitterChildImageSharpFixedTracedSvg = 'imageTwitter___childImageSharp___fixed___tracedSVG',
    ImageTwitterChildImageSharpFixedAspectRatio = 'imageTwitter___childImageSharp___fixed___aspectRatio',
    ImageTwitterChildImageSharpFixedWidth = 'imageTwitter___childImageSharp___fixed___width',
    ImageTwitterChildImageSharpFixedHeight = 'imageTwitter___childImageSharp___fixed___height',
    ImageTwitterChildImageSharpFixedSrc = 'imageTwitter___childImageSharp___fixed___src',
    ImageTwitterChildImageSharpFixedSrcSet = 'imageTwitter___childImageSharp___fixed___srcSet',
    ImageTwitterChildImageSharpFixedSrcWebp = 'imageTwitter___childImageSharp___fixed___srcWebp',
    ImageTwitterChildImageSharpFixedSrcSetWebp = 'imageTwitter___childImageSharp___fixed___srcSetWebp',
    ImageTwitterChildImageSharpFixedOriginalName = 'imageTwitter___childImageSharp___fixed___originalName',
    ImageTwitterChildImageSharpResolutionsBase64 = 'imageTwitter___childImageSharp___resolutions___base64',
    ImageTwitterChildImageSharpResolutionsTracedSvg = 'imageTwitter___childImageSharp___resolutions___tracedSVG',
    ImageTwitterChildImageSharpResolutionsAspectRatio = 'imageTwitter___childImageSharp___resolutions___aspectRatio',
    ImageTwitterChildImageSharpResolutionsWidth = 'imageTwitter___childImageSharp___resolutions___width',
    ImageTwitterChildImageSharpResolutionsHeight = 'imageTwitter___childImageSharp___resolutions___height',
    ImageTwitterChildImageSharpResolutionsSrc = 'imageTwitter___childImageSharp___resolutions___src',
    ImageTwitterChildImageSharpResolutionsSrcSet = 'imageTwitter___childImageSharp___resolutions___srcSet',
    ImageTwitterChildImageSharpResolutionsSrcWebp = 'imageTwitter___childImageSharp___resolutions___srcWebp',
    ImageTwitterChildImageSharpResolutionsSrcSetWebp = 'imageTwitter___childImageSharp___resolutions___srcSetWebp',
    ImageTwitterChildImageSharpResolutionsOriginalName = 'imageTwitter___childImageSharp___resolutions___originalName',
    ImageTwitterChildImageSharpFluidBase64 = 'imageTwitter___childImageSharp___fluid___base64',
    ImageTwitterChildImageSharpFluidTracedSvg = 'imageTwitter___childImageSharp___fluid___tracedSVG',
    ImageTwitterChildImageSharpFluidAspectRatio = 'imageTwitter___childImageSharp___fluid___aspectRatio',
    ImageTwitterChildImageSharpFluidSrc = 'imageTwitter___childImageSharp___fluid___src',
    ImageTwitterChildImageSharpFluidSrcSet = 'imageTwitter___childImageSharp___fluid___srcSet',
    ImageTwitterChildImageSharpFluidSrcWebp = 'imageTwitter___childImageSharp___fluid___srcWebp',
    ImageTwitterChildImageSharpFluidSrcSetWebp = 'imageTwitter___childImageSharp___fluid___srcSetWebp',
    ImageTwitterChildImageSharpFluidSizes = 'imageTwitter___childImageSharp___fluid___sizes',
    ImageTwitterChildImageSharpFluidOriginalImg = 'imageTwitter___childImageSharp___fluid___originalImg',
    ImageTwitterChildImageSharpFluidOriginalName = 'imageTwitter___childImageSharp___fluid___originalName',
    ImageTwitterChildImageSharpFluidPresentationWidth = 'imageTwitter___childImageSharp___fluid___presentationWidth',
    ImageTwitterChildImageSharpFluidPresentationHeight = 'imageTwitter___childImageSharp___fluid___presentationHeight',
    ImageTwitterChildImageSharpSizesBase64 = 'imageTwitter___childImageSharp___sizes___base64',
    ImageTwitterChildImageSharpSizesTracedSvg = 'imageTwitter___childImageSharp___sizes___tracedSVG',
    ImageTwitterChildImageSharpSizesAspectRatio = 'imageTwitter___childImageSharp___sizes___aspectRatio',
    ImageTwitterChildImageSharpSizesSrc = 'imageTwitter___childImageSharp___sizes___src',
    ImageTwitterChildImageSharpSizesSrcSet = 'imageTwitter___childImageSharp___sizes___srcSet',
    ImageTwitterChildImageSharpSizesSrcWebp = 'imageTwitter___childImageSharp___sizes___srcWebp',
    ImageTwitterChildImageSharpSizesSrcSetWebp = 'imageTwitter___childImageSharp___sizes___srcSetWebp',
    ImageTwitterChildImageSharpSizesSizes = 'imageTwitter___childImageSharp___sizes___sizes',
    ImageTwitterChildImageSharpSizesOriginalImg = 'imageTwitter___childImageSharp___sizes___originalImg',
    ImageTwitterChildImageSharpSizesOriginalName = 'imageTwitter___childImageSharp___sizes___originalName',
    ImageTwitterChildImageSharpSizesPresentationWidth = 'imageTwitter___childImageSharp___sizes___presentationWidth',
    ImageTwitterChildImageSharpSizesPresentationHeight = 'imageTwitter___childImageSharp___sizes___presentationHeight',
    ImageTwitterChildImageSharpOriginalWidth = 'imageTwitter___childImageSharp___original___width',
    ImageTwitterChildImageSharpOriginalHeight = 'imageTwitter___childImageSharp___original___height',
    ImageTwitterChildImageSharpOriginalSrc = 'imageTwitter___childImageSharp___original___src',
    ImageTwitterChildImageSharpResizeSrc = 'imageTwitter___childImageSharp___resize___src',
    ImageTwitterChildImageSharpResizeTracedSvg = 'imageTwitter___childImageSharp___resize___tracedSVG',
    ImageTwitterChildImageSharpResizeWidth = 'imageTwitter___childImageSharp___resize___width',
    ImageTwitterChildImageSharpResizeHeight = 'imageTwitter___childImageSharp___resize___height',
    ImageTwitterChildImageSharpResizeAspectRatio = 'imageTwitter___childImageSharp___resize___aspectRatio',
    ImageTwitterChildImageSharpResizeOriginalName = 'imageTwitter___childImageSharp___resize___originalName',
    ImageTwitterChildImageSharpId = 'imageTwitter___childImageSharp___id',
    ImageTwitterChildImageSharpParentId = 'imageTwitter___childImageSharp___parent___id',
    ImageTwitterChildImageSharpParentChildren = 'imageTwitter___childImageSharp___parent___children',
    ImageTwitterChildImageSharpChildren = 'imageTwitter___childImageSharp___children',
    ImageTwitterChildImageSharpChildrenId = 'imageTwitter___childImageSharp___children___id',
    ImageTwitterChildImageSharpChildrenChildren = 'imageTwitter___childImageSharp___children___children',
    ImageTwitterChildImageSharpInternalContent = 'imageTwitter___childImageSharp___internal___content',
    ImageTwitterChildImageSharpInternalContentDigest = 'imageTwitter___childImageSharp___internal___contentDigest',
    ImageTwitterChildImageSharpInternalDescription = 'imageTwitter___childImageSharp___internal___description',
    ImageTwitterChildImageSharpInternalFieldOwners = 'imageTwitter___childImageSharp___internal___fieldOwners',
    ImageTwitterChildImageSharpInternalIgnoreType = 'imageTwitter___childImageSharp___internal___ignoreType',
    ImageTwitterChildImageSharpInternalMediaType = 'imageTwitter___childImageSharp___internal___mediaType',
    ImageTwitterChildImageSharpInternalOwner = 'imageTwitter___childImageSharp___internal___owner',
    ImageTwitterChildImageSharpInternalType = 'imageTwitter___childImageSharp___internal___type',
    ImageTwitterId = 'imageTwitter___id',
    ImageTwitterParentId = 'imageTwitter___parent___id',
    ImageTwitterParentParentId = 'imageTwitter___parent___parent___id',
    ImageTwitterParentParentChildren = 'imageTwitter___parent___parent___children',
    ImageTwitterParentChildren = 'imageTwitter___parent___children',
    ImageTwitterParentChildrenId = 'imageTwitter___parent___children___id',
    ImageTwitterParentChildrenChildren = 'imageTwitter___parent___children___children',
    ImageTwitterParentInternalContent = 'imageTwitter___parent___internal___content',
    ImageTwitterParentInternalContentDigest = 'imageTwitter___parent___internal___contentDigest',
    ImageTwitterParentInternalDescription = 'imageTwitter___parent___internal___description',
    ImageTwitterParentInternalFieldOwners = 'imageTwitter___parent___internal___fieldOwners',
    ImageTwitterParentInternalIgnoreType = 'imageTwitter___parent___internal___ignoreType',
    ImageTwitterParentInternalMediaType = 'imageTwitter___parent___internal___mediaType',
    ImageTwitterParentInternalOwner = 'imageTwitter___parent___internal___owner',
    ImageTwitterParentInternalType = 'imageTwitter___parent___internal___type',
    ImageTwitterChildren = 'imageTwitter___children',
    ImageTwitterChildrenId = 'imageTwitter___children___id',
    ImageTwitterChildrenParentId = 'imageTwitter___children___parent___id',
    ImageTwitterChildrenParentChildren = 'imageTwitter___children___parent___children',
    ImageTwitterChildrenChildren = 'imageTwitter___children___children',
    ImageTwitterChildrenChildrenId = 'imageTwitter___children___children___id',
    ImageTwitterChildrenChildrenChildren = 'imageTwitter___children___children___children',
    ImageTwitterChildrenInternalContent = 'imageTwitter___children___internal___content',
    ImageTwitterChildrenInternalContentDigest = 'imageTwitter___children___internal___contentDigest',
    ImageTwitterChildrenInternalDescription = 'imageTwitter___children___internal___description',
    ImageTwitterChildrenInternalFieldOwners = 'imageTwitter___children___internal___fieldOwners',
    ImageTwitterChildrenInternalIgnoreType = 'imageTwitter___children___internal___ignoreType',
    ImageTwitterChildrenInternalMediaType = 'imageTwitter___children___internal___mediaType',
    ImageTwitterChildrenInternalOwner = 'imageTwitter___children___internal___owner',
    ImageTwitterChildrenInternalType = 'imageTwitter___children___internal___type',
    ImageTwitterInternalContent = 'imageTwitter___internal___content',
    ImageTwitterInternalContentDigest = 'imageTwitter___internal___contentDigest',
    ImageTwitterInternalDescription = 'imageTwitter___internal___description',
    ImageTwitterInternalFieldOwners = 'imageTwitter___internal___fieldOwners',
    ImageTwitterInternalIgnoreType = 'imageTwitter___internal___ignoreType',
    ImageTwitterInternalMediaType = 'imageTwitter___internal___mediaType',
    ImageTwitterInternalOwner = 'imageTwitter___internal___owner',
    ImageTwitterInternalType = 'imageTwitter___internal___type',
    ImageTwitterChildMdxRawBody = 'imageTwitter___childMdx___rawBody',
    ImageTwitterChildMdxFileAbsolutePath = 'imageTwitter___childMdx___fileAbsolutePath',
    ImageTwitterChildMdxFrontmatterTitle = 'imageTwitter___childMdx___frontmatter___title',
    ImageTwitterChildMdxFrontmatterExcerpt = 'imageTwitter___childMdx___frontmatter___excerpt',
    ImageTwitterChildMdxFrontmatterTags = 'imageTwitter___childMdx___frontmatter___tags',
    ImageTwitterChildMdxFrontmatterFeaturedImagePosition = 'imageTwitter___childMdx___frontmatter___featuredImagePosition',
    ImageTwitterChildMdxFrontmatterDraft = 'imageTwitter___childMdx___frontmatter___draft',
    ImageTwitterChildMdxBody = 'imageTwitter___childMdx___body',
    ImageTwitterChildMdxExcerpt = 'imageTwitter___childMdx___excerpt',
    ImageTwitterChildMdxHeadings = 'imageTwitter___childMdx___headings',
    ImageTwitterChildMdxHeadingsValue = 'imageTwitter___childMdx___headings___value',
    ImageTwitterChildMdxHeadingsDepth = 'imageTwitter___childMdx___headings___depth',
    ImageTwitterChildMdxHtml = 'imageTwitter___childMdx___html',
    ImageTwitterChildMdxMdxAst = 'imageTwitter___childMdx___mdxAST',
    ImageTwitterChildMdxTableOfContents = 'imageTwitter___childMdx___tableOfContents',
    ImageTwitterChildMdxTimeToRead = 'imageTwitter___childMdx___timeToRead',
    ImageTwitterChildMdxWordCountParagraphs = 'imageTwitter___childMdx___wordCount___paragraphs',
    ImageTwitterChildMdxWordCountSentences = 'imageTwitter___childMdx___wordCount___sentences',
    ImageTwitterChildMdxWordCountWords = 'imageTwitter___childMdx___wordCount___words',
    ImageTwitterChildMdxId = 'imageTwitter___childMdx___id',
    ImageTwitterChildMdxParentId = 'imageTwitter___childMdx___parent___id',
    ImageTwitterChildMdxParentChildren = 'imageTwitter___childMdx___parent___children',
    ImageTwitterChildMdxChildren = 'imageTwitter___childMdx___children',
    ImageTwitterChildMdxChildrenId = 'imageTwitter___childMdx___children___id',
    ImageTwitterChildMdxChildrenChildren = 'imageTwitter___childMdx___children___children',
    ImageTwitterChildMdxInternalContent = 'imageTwitter___childMdx___internal___content',
    ImageTwitterChildMdxInternalContentDigest = 'imageTwitter___childMdx___internal___contentDigest',
    ImageTwitterChildMdxInternalDescription = 'imageTwitter___childMdx___internal___description',
    ImageTwitterChildMdxInternalFieldOwners = 'imageTwitter___childMdx___internal___fieldOwners',
    ImageTwitterChildMdxInternalIgnoreType = 'imageTwitter___childMdx___internal___ignoreType',
    ImageTwitterChildMdxInternalMediaType = 'imageTwitter___childMdx___internal___mediaType',
    ImageTwitterChildMdxInternalOwner = 'imageTwitter___childMdx___internal___owner',
    ImageTwitterChildMdxInternalType = 'imageTwitter___childMdx___internal___type',
    ImageTwitterChildImagesJsonId = 'imageTwitter___childImagesJson___id',
    ImageTwitterChildImagesJsonParentId = 'imageTwitter___childImagesJson___parent___id',
    ImageTwitterChildImagesJsonParentChildren = 'imageTwitter___childImagesJson___parent___children',
    ImageTwitterChildImagesJsonChildren = 'imageTwitter___childImagesJson___children',
    ImageTwitterChildImagesJsonChildrenId = 'imageTwitter___childImagesJson___children___id',
    ImageTwitterChildImagesJsonChildrenChildren = 'imageTwitter___childImagesJson___children___children',
    ImageTwitterChildImagesJsonInternalContent = 'imageTwitter___childImagesJson___internal___content',
    ImageTwitterChildImagesJsonInternalContentDigest = 'imageTwitter___childImagesJson___internal___contentDigest',
    ImageTwitterChildImagesJsonInternalDescription = 'imageTwitter___childImagesJson___internal___description',
    ImageTwitterChildImagesJsonInternalFieldOwners = 'imageTwitter___childImagesJson___internal___fieldOwners',
    ImageTwitterChildImagesJsonInternalIgnoreType = 'imageTwitter___childImagesJson___internal___ignoreType',
    ImageTwitterChildImagesJsonInternalMediaType = 'imageTwitter___childImagesJson___internal___mediaType',
    ImageTwitterChildImagesJsonInternalOwner = 'imageTwitter___childImagesJson___internal___owner',
    ImageTwitterChildImagesJsonInternalType = 'imageTwitter___childImagesJson___internal___type',
    ImageTwitterChildImagesJsonGallery = 'imageTwitter___childImagesJson___gallery',
    ImageTwitterChildImagesJsonGalleryTitle = 'imageTwitter___childImagesJson___gallery___title',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
}

export type PostFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    body?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    draft?: Maybe<BooleanQueryOperatorInput>;
    featuredImage?: Maybe<FileFilterInput>;
    featuredImagePosition?: Maybe<StringQueryOperatorInput>;
    imageFacebook?: Maybe<FileFilterInput>;
    imageTwitter?: Maybe<FileFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type PostGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<PostEdge>;
    nodes: Array<Post>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type PostSortInput = {
    fields?: Maybe<Array<Maybe<PostFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Potrace = {
    turnPolicy?: Maybe<PotraceTurnPolicy>;
    turdSize?: Maybe<Scalars['Float']>;
    alphaMax?: Maybe<Scalars['Float']>;
    optCurve?: Maybe<Scalars['Boolean']>;
    optTolerance?: Maybe<Scalars['Float']>;
    threshold?: Maybe<Scalars['Int']>;
    blackOnWhite?: Maybe<Scalars['Boolean']>;
    color?: Maybe<Scalars['String']>;
    background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
    TurnpolicyBlack = 'TURNPOLICY_BLACK',
    TurnpolicyWhite = 'TURNPOLICY_WHITE',
    TurnpolicyLeft = 'TURNPOLICY_LEFT',
    TurnpolicyRight = 'TURNPOLICY_RIGHT',
    TurnpolicyMinority = 'TURNPOLICY_MINORITY',
    TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
    file?: Maybe<File>;
    allFile: FileConnection;
    directory?: Maybe<Directory>;
    allDirectory: DirectoryConnection;
    sitePage?: Maybe<SitePage>;
    allSitePage: SitePageConnection;
    imageSharp?: Maybe<ImageSharp>;
    allImageSharp: ImageSharpConnection;
    page?: Maybe<Page>;
    allPage: PageConnection;
    post?: Maybe<Post>;
    allPost: PostConnection;
    mdx?: Maybe<Mdx>;
    allMdx: MdxConnection;
    imagesJson?: Maybe<ImagesJson>;
    allImagesJson: ImagesJsonConnection;
    site?: Maybe<Site>;
    allSite: SiteConnection;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childMdx?: Maybe<MdxFilterInput>;
    childImagesJson?: Maybe<ImagesJsonFilterInput>;
};

export type QueryAllFileArgs = {
    filter?: Maybe<FileFilterInput>;
    sort?: Maybe<FileSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
    filter?: Maybe<DirectoryFilterInput>;
    sort?: Maybe<DirectorySortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
    filter?: Maybe<SitePageFilterInput>;
    sort?: Maybe<SitePageSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
    filter?: Maybe<ImageSharpFilterInput>;
    sort?: Maybe<ImageSharpSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryPageArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    draft?: Maybe<BooleanQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    body?: Maybe<StringQueryOperatorInput>;
    featuredImage?: Maybe<FileFilterInput>;
    featuredImagePosition?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPageArgs = {
    filter?: Maybe<PageFilterInput>;
    sort?: Maybe<PageSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryPostArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    date?: Maybe<DateQueryOperatorInput>;
    body?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    draft?: Maybe<BooleanQueryOperatorInput>;
    featuredImage?: Maybe<FileFilterInput>;
    featuredImagePosition?: Maybe<StringQueryOperatorInput>;
    imageFacebook?: Maybe<FileFilterInput>;
    imageTwitter?: Maybe<FileFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPostArgs = {
    filter?: Maybe<PostFilterInput>;
    sort?: Maybe<PostSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryMdxArgs = {
    rawBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MdxFrontmatterFilterInput>;
    body?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    headings?: Maybe<MdxHeadingMdxFilterListInput>;
    html?: Maybe<StringQueryOperatorInput>;
    mdxAST?: Maybe<JsonQueryOperatorInput>;
    tableOfContents?: Maybe<JsonQueryOperatorInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    wordCount?: Maybe<MdxWordCountFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMdxArgs = {
    filter?: Maybe<MdxFilterInput>;
    sort?: Maybe<MdxSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryImagesJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    gallery?: Maybe<ImagesJsonGalleryFilterListInput>;
};

export type QueryAllImagesJsonArgs = {
    filter?: Maybe<ImagesJsonFilterInput>;
    sort?: Maybe<ImagesJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
    filter?: Maybe<SiteFilterInput>;
    sort?: Maybe<SiteSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
    filter?: Maybe<SitePluginFilterInput>;
    sort?: Maybe<SitePluginSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<Scalars['Int']>;
    host?: Maybe<Scalars['String']>;
    polyfill?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type SiteConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
};

export type SiteEdge = {
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    SiteMetadataTitle = 'siteMetadata___title',
    SiteMetadataAuthor = 'siteMetadata___author',
    SiteMetadataDescription = 'siteMetadata___description',
    SiteMetadataSiteTitle = 'siteMetadata___siteTitle',
    SiteMetadataSiteDescription = 'siteMetadata___siteDescription',
    SiteMetadataAuthorName = 'siteMetadata___authorName',
    SiteMetadataTwitterUsername = 'siteMetadata___twitterUsername',
    SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
    SiteMetadataGoogleTagManagerId = 'siteMetadata___googleTagManagerId',
    SiteMetadataBackgroundColor = 'siteMetadata___backgroundColor',
    SiteMetadataThemeColor = 'siteMetadata___themeColor',
    SiteMetadataIcon = 'siteMetadata___icon',
    SiteMetadataHeaderTitle = 'siteMetadata___headerTitle',
    SiteMetadataHeaderLinksIcon = 'siteMetadata___headerLinksIcon',
    SiteMetadataHeaderLinks = 'siteMetadata___headerLinks',
    SiteMetadataHeaderLinksLabel = 'siteMetadata___headerLinks___label',
    SiteMetadataHeaderLinksUrl = 'siteMetadata___headerLinks___url',
    SiteMetadataFooterLinks = 'siteMetadata___footerLinks',
    SiteMetadataFooterLinksSectionName = 'siteMetadata___footerLinks___sectionName',
    SiteMetadataFooterLinksLinks = 'siteMetadata___footerLinks___links',
    SiteMetadataFooterLinksLinksLabel = 'siteMetadata___footerLinks___links___label',
    SiteMetadataFooterLinksLinksUrl = 'siteMetadata___footerLinks___links___url',
    Port = 'port',
    Host = 'host',
    Polyfill = 'polyfill',
    PathPrefix = 'pathPrefix',
    BuildTime = 'buildTime',
}

export type SiteFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
    path: Scalars['String'];
    component: Scalars['String'];
    internalComponentName: Scalars['String'];
    componentChunkName: Scalars['String'];
    matchPath?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
    context?: Maybe<SitePageContext>;
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<Scalars['String']>;
    componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
};

export type SitePageContext = {
    id?: Maybe<Scalars['String']>;
    tagRegex?: Maybe<Scalars['String']>;
    tag?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['String']>;
    allPosts?: Maybe<SitePageContextAllPosts>;
};

export type SitePageContextAllPosts = {
    allPost?: Maybe<SitePageContextAllPostsAllPost>;
};

export type SitePageContextAllPostsAllPost = {
    nodes?: Maybe<Array<Maybe<SitePageContextAllPostsAllPostNodes>>>;
};

export type SitePageContextAllPostsAllPostFilterInput = {
    nodes?: Maybe<SitePageContextAllPostsAllPostNodesFilterListInput>;
};

export type SitePageContextAllPostsAllPostNodes = {
    id?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
    excerpt?: Maybe<Scalars['String']>;
    draft?: Maybe<Scalars['Boolean']>;
    date?: Maybe<Scalars['String']>;
    body?: Maybe<Scalars['String']>;
    featuredImage?: Maybe<SitePageContextAllPostsAllPostNodesFeaturedImage>;
    featuredImagePosition?: Maybe<Scalars['String']>;
    imageTwitter?: Maybe<SitePageContextAllPostsAllPostNodesImageTwitter>;
    imageFacebook?: Maybe<SitePageContextAllPostsAllPostNodesImageFacebook>;
};

export type SitePageContextAllPostsAllPostNodesFeaturedImage = {
    publicURL?: Maybe<Scalars['String']>;
    sharp?: Maybe<SitePageContextAllPostsAllPostNodesFeaturedImageSharp>;
};

export type SitePageContextAllPostsAllPostNodesFeaturedImageFilterInput = {
    publicURL?: Maybe<StringQueryOperatorInput>;
    sharp?: Maybe<SitePageContextAllPostsAllPostNodesFeaturedImageSharpFilterInput>;
};

export type SitePageContextAllPostsAllPostNodesFeaturedImageSharp = {
    fluid?: Maybe<SitePageContextAllPostsAllPostNodesFeaturedImageSharpFluid>;
};

export type SitePageContextAllPostsAllPostNodesFeaturedImageSharpFilterInput = {
    fluid?: Maybe<SitePageContextAllPostsAllPostNodesFeaturedImageSharpFluidFilterInput>;
};

export type SitePageContextAllPostsAllPostNodesFeaturedImageSharpFluid = {
    aspectRatio?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
    srcSet?: Maybe<Scalars['String']>;
    sizes?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type SitePageContextAllPostsAllPostNodesFeaturedImageSharpFluidFilterInput = {
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextAllPostsAllPostNodesFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    draft?: Maybe<BooleanQueryOperatorInput>;
    date?: Maybe<StringQueryOperatorInput>;
    body?: Maybe<StringQueryOperatorInput>;
    featuredImage?: Maybe<SitePageContextAllPostsAllPostNodesFeaturedImageFilterInput>;
    featuredImagePosition?: Maybe<StringQueryOperatorInput>;
    imageTwitter?: Maybe<SitePageContextAllPostsAllPostNodesImageTwitterFilterInput>;
    imageFacebook?: Maybe<SitePageContextAllPostsAllPostNodesImageFacebookFilterInput>;
};

export type SitePageContextAllPostsAllPostNodesFilterListInput = {
    elemMatch?: Maybe<SitePageContextAllPostsAllPostNodesFilterInput>;
};

export type SitePageContextAllPostsAllPostNodesImageFacebook = {
    publicURL?: Maybe<Scalars['String']>;
};

export type SitePageContextAllPostsAllPostNodesImageFacebookFilterInput = {
    publicURL?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextAllPostsAllPostNodesImageTwitter = {
    publicURL?: Maybe<Scalars['String']>;
};

export type SitePageContextAllPostsAllPostNodesImageTwitterFilterInput = {
    publicURL?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextAllPostsFilterInput = {
    allPost?: Maybe<SitePageContextAllPostsAllPostFilterInput>;
};

export type SitePageContextFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    tagRegex?: Maybe<StringQueryOperatorInput>;
    tag?: Maybe<StringQueryOperatorInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    allPosts?: Maybe<SitePageContextAllPostsFilterInput>;
};

export type SitePageEdge = {
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
    Path = 'path',
    Component = 'component',
    InternalComponentName = 'internalComponentName',
    ComponentChunkName = 'componentChunkName',
    MatchPath = 'matchPath',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    ContextId = 'context___id',
    ContextTagRegex = 'context___tagRegex',
    ContextTag = 'context___tag',
    ContextWidth = 'context___width',
    ContextHeight = 'context___height',
    ContextType = 'context___type',
    ContextAllPostsAllPostNodes = 'context___allPosts___allPost___nodes',
    PluginCreatorId = 'pluginCreator___id',
    PluginCreatorParentId = 'pluginCreator___parent___id',
    PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
    PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
    PluginCreatorParentChildren = 'pluginCreator___parent___children',
    PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
    PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
    PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
    PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
    PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
    PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
    PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
    PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
    PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
    PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
    PluginCreatorChildren = 'pluginCreator___children',
    PluginCreatorChildrenId = 'pluginCreator___children___id',
    PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
    PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
    PluginCreatorChildrenChildren = 'pluginCreator___children___children',
    PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
    PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
    PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
    PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
    PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
    PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
    PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
    PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
    PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
    PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
    PluginCreatorInternalContent = 'pluginCreator___internal___content',
    PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
    PluginCreatorInternalDescription = 'pluginCreator___internal___description',
    PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
    PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
    PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
    PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
    PluginCreatorInternalType = 'pluginCreator___internal___type',
    PluginCreatorResolve = 'pluginCreator___resolve',
    PluginCreatorName = 'pluginCreator___name',
    PluginCreatorVersion = 'pluginCreator___version',
    PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
    PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
    PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
    PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
    PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
    PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
    PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
    PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
    PluginCreatorPluginOptionsDefaultLayoutsDefault = 'pluginCreator___pluginOptions___defaultLayouts___default',
    PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
    PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
    PluginCreatorPluginOptionsResolve = 'pluginCreator___pluginOptions___resolve',
    PluginCreatorPluginOptionsOptionsPath = 'pluginCreator___pluginOptions___options___path',
    PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
    PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
    PluginCreatorPluginOptionsFeeds = 'pluginCreator___pluginOptions___feeds',
    PluginCreatorPluginOptionsFeedsQuery = 'pluginCreator___pluginOptions___feeds___query',
    PluginCreatorPluginOptionsFeedsOutput = 'pluginCreator___pluginOptions___feeds___output',
    PluginCreatorPluginOptionsFeedsTitle = 'pluginCreator___pluginOptions___feeds___title',
    PluginCreatorPluginOptionsPolicy = 'pluginCreator___pluginOptions___policy',
    PluginCreatorPluginOptionsPolicyUserAgent = 'pluginCreator___pluginOptions___policy___userAgent',
    PluginCreatorPluginOptionsPolicyAllow = 'pluginCreator___pluginOptions___policy___allow',
    PluginCreatorPluginOptionsRssFile = 'pluginCreator___pluginOptions___rss___file',
    PluginCreatorPluginOptionsRssTitle = 'pluginCreator___pluginOptions___rss___title',
    PluginCreatorPluginOptionsId = 'pluginCreator___pluginOptions___id',
    PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
    PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
    PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
    PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
    PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
    PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
    PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
    PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
    PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
    PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
    PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
    PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
    PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
    PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
    PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
    PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
    PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
    PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
    PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
    PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
    PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
    PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
    PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
    PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
    PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
    PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
    PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
    fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    resolve?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
    packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Resolve = 'resolve',
    Name = 'name',
    Version = 'version',
    PluginOptionsPlugins = 'pluginOptions___plugins',
    PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
    PluginOptionsPluginsId = 'pluginOptions___plugins___id',
    PluginOptionsPluginsName = 'pluginOptions___plugins___name',
    PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
    PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
    PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
    PluginOptionsExtensions = 'pluginOptions___extensions',
    PluginOptionsDefaultLayoutsDefault = 'pluginOptions___defaultLayouts___default',
    PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
    PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
    PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
    PluginOptionsGatsbyRemarkPluginsOptionsLinkImagesToOriginal = 'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal',
    PluginOptionsGatsbyRemarkPluginsOptionsWithWebp = 'pluginOptions___gatsbyRemarkPlugins___options___withWebp',
    PluginOptionsGatsbyRemarkPluginsOptionsShowCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___showCaptions',
    PluginOptionsGatsbyRemarkPluginsOptionsPathPrefix = 'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix',
    PluginOptionsGatsbyRemarkPluginsOptionsWrapperStyle = 'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle',
    PluginOptionsGatsbyRemarkPluginsOptionsBackgroundColor = 'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor',
    PluginOptionsGatsbyRemarkPluginsOptionsMarkdownCaptions = 'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions',
    PluginOptionsGatsbyRemarkPluginsOptionsTracedSvg = 'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG',
    PluginOptionsGatsbyRemarkPluginsOptionsLoading = 'pluginOptions___gatsbyRemarkPlugins___options___loading',
    PluginOptionsGatsbyRemarkPluginsOptionsDisableBgImageOnAlpha = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha',
    PluginOptionsGatsbyRemarkPluginsOptionsDisableBgImage = 'pluginOptions___gatsbyRemarkPlugins___options___disableBgImage',
    PluginOptionsGatsbyRemarkPluginsOptionsShowLineNumbers = 'pluginOptions___gatsbyRemarkPlugins___options___showLineNumbers',
    PluginOptionsGatsbyRemarkPluginsOptionsIgnoreFileExtensions = 'pluginOptions___gatsbyRemarkPlugins___options___ignoreFileExtensions',
    PluginOptionsResolve = 'pluginOptions___resolve',
    PluginOptionsOptionsPath = 'pluginOptions___options___path',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsFeeds = 'pluginOptions___feeds',
    PluginOptionsFeedsQuery = 'pluginOptions___feeds___query',
    PluginOptionsFeedsOutput = 'pluginOptions___feeds___output',
    PluginOptionsFeedsTitle = 'pluginOptions___feeds___title',
    PluginOptionsPolicy = 'pluginOptions___policy',
    PluginOptionsPolicyUserAgent = 'pluginOptions___policy___userAgent',
    PluginOptionsPolicyAllow = 'pluginOptions___policy___allow',
    PluginOptionsRssFile = 'pluginOptions___rss___file',
    PluginOptionsRssTitle = 'pluginOptions___rss___title',
    PluginOptionsId = 'pluginOptions___id',
    PluginOptionsShortName = 'pluginOptions___short_name',
    PluginOptionsStartUrl = 'pluginOptions___start_url',
    PluginOptionsBackgroundColor = 'pluginOptions___background_color',
    PluginOptionsThemeColor = 'pluginOptions___theme_color',
    PluginOptionsDisplay = 'pluginOptions___display',
    PluginOptionsIcon = 'pluginOptions___icon',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonAuthor = 'packageJson___author',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDependenciesName = 'packageJson___dependencies___name',
    PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
    PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
    PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
    PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    main?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    license?: Maybe<Scalars['String']>;
    dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
    devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
    peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    main?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
    plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
    extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
    defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayouts>;
    gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
    resolve?: Maybe<Scalars['String']>;
    options?: Maybe<SitePluginPluginOptionsOptions>;
    name?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
    policy?: Maybe<Array<Maybe<SitePluginPluginOptionsPolicy>>>;
    rss?: Maybe<SitePluginPluginOptionsRss>;
    id?: Maybe<Scalars['String']>;
    short_name?: Maybe<Scalars['String']>;
    start_url?: Maybe<Scalars['String']>;
    background_color?: Maybe<Scalars['String']>;
    theme_color?: Maybe<Scalars['String']>;
    display?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsDefaultLayouts = {
    default?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaultLayoutsFilterInput = {
    default?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeeds = {
    query?: Maybe<Scalars['String']>;
    output?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
    query?: Maybe<StringQueryOperatorInput>;
    output?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
    plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    extensions?: Maybe<StringQueryOperatorInput>;
    defaultLayouts?: Maybe<SitePluginPluginOptionsDefaultLayoutsFilterInput>;
    gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
    name?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
    policy?: Maybe<SitePluginPluginOptionsPolicyFilterListInput>;
    rss?: Maybe<SitePluginPluginOptionsRssFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    short_name?: Maybe<StringQueryOperatorInput>;
    start_url?: Maybe<StringQueryOperatorInput>;
    background_color?: Maybe<StringQueryOperatorInput>;
    theme_color?: Maybe<StringQueryOperatorInput>;
    display?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
    resolve?: Maybe<Scalars['String']>;
    options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
    resolve?: Maybe<StringQueryOperatorInput>;
    options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
    maxWidth?: Maybe<Scalars['Int']>;
    linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
    withWebp?: Maybe<Scalars['Boolean']>;
    showCaptions?: Maybe<Array<Maybe<Scalars['String']>>>;
    pathPrefix?: Maybe<Scalars['String']>;
    wrapperStyle?: Maybe<Scalars['String']>;
    backgroundColor?: Maybe<Scalars['String']>;
    markdownCaptions?: Maybe<Scalars['Boolean']>;
    tracedSVG?: Maybe<Scalars['Boolean']>;
    loading?: Maybe<Scalars['String']>;
    disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
    disableBgImage?: Maybe<Scalars['Boolean']>;
    showLineNumbers?: Maybe<Scalars['Boolean']>;
    ignoreFileExtensions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
    maxWidth?: Maybe<IntQueryOperatorInput>;
    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
    withWebp?: Maybe<BooleanQueryOperatorInput>;
    showCaptions?: Maybe<StringQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    wrapperStyle?: Maybe<StringQueryOperatorInput>;
    backgroundColor?: Maybe<StringQueryOperatorInput>;
    markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
    tracedSVG?: Maybe<BooleanQueryOperatorInput>;
    loading?: Maybe<StringQueryOperatorInput>;
    disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
    disableBgImage?: Maybe<BooleanQueryOperatorInput>;
    showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
    ignoreFileExtensions?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsOptions = {
    path?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsOptionsFilterInput = {
    path?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
    resolve?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
    resolve?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPolicy = {
    userAgent?: Maybe<Scalars['String']>;
    allow?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPolicyFilterInput = {
    userAgent?: Maybe<StringQueryOperatorInput>;
    allow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPolicyFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsPolicyFilterInput>;
};

export type SitePluginPluginOptionsRss = {
    file?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsRssFilterInput = {
    file?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
    fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    siteTitle?: Maybe<Scalars['String']>;
    siteDescription?: Maybe<Scalars['String']>;
    authorName?: Maybe<Scalars['String']>;
    twitterUsername?: Maybe<Scalars['String']>;
    siteUrl?: Maybe<Scalars['String']>;
    googleTagManagerId?: Maybe<Scalars['String']>;
    backgroundColor?: Maybe<Scalars['String']>;
    themeColor?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    headerTitle?: Maybe<Scalars['String']>;
    headerLinksIcon?: Maybe<Scalars['String']>;
    headerLinks?: Maybe<Array<Maybe<SiteSiteMetadataHeaderLinks>>>;
    footerLinks?: Maybe<Array<Maybe<SiteSiteMetadataFooterLinks>>>;
};

export type SiteSiteMetadataFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    siteTitle?: Maybe<StringQueryOperatorInput>;
    siteDescription?: Maybe<StringQueryOperatorInput>;
    authorName?: Maybe<StringQueryOperatorInput>;
    twitterUsername?: Maybe<StringQueryOperatorInput>;
    siteUrl?: Maybe<StringQueryOperatorInput>;
    googleTagManagerId?: Maybe<StringQueryOperatorInput>;
    backgroundColor?: Maybe<StringQueryOperatorInput>;
    themeColor?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    headerTitle?: Maybe<StringQueryOperatorInput>;
    headerLinksIcon?: Maybe<StringQueryOperatorInput>;
    headerLinks?: Maybe<SiteSiteMetadataHeaderLinksFilterListInput>;
    footerLinks?: Maybe<SiteSiteMetadataFooterLinksFilterListInput>;
};

export type SiteSiteMetadataFooterLinks = {
    sectionName?: Maybe<Scalars['String']>;
    links?: Maybe<Array<Maybe<SiteSiteMetadataFooterLinksLinks>>>;
};

export type SiteSiteMetadataFooterLinksFilterInput = {
    sectionName?: Maybe<StringQueryOperatorInput>;
    links?: Maybe<SiteSiteMetadataFooterLinksLinksFilterListInput>;
};

export type SiteSiteMetadataFooterLinksFilterListInput = {
    elemMatch?: Maybe<SiteSiteMetadataFooterLinksFilterInput>;
};

export type SiteSiteMetadataFooterLinksLinks = {
    label?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFooterLinksLinksFilterInput = {
    label?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFooterLinksLinksFilterListInput = {
    elemMatch?: Maybe<SiteSiteMetadataFooterLinksLinksFilterInput>;
};

export type SiteSiteMetadataHeaderLinks = {
    label?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataHeaderLinksFilterInput = {
    label?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataHeaderLinksFilterListInput = {
    elemMatch?: Maybe<SiteSiteMetadataHeaderLinksFilterInput>;
};

export type SiteSortInput = {
    fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
    Asc = 'ASC',
    Desc = 'DESC',
}

export type StringQueryOperatorInput = {
    eq?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    regex?: Maybe<Scalars['String']>;
    glob?: Maybe<Scalars['String']>;
};

export type PagesQueryVariables = {};

export type PagesQuery = { allPage: { nodes: Array<Pick<Page, 'id' | 'path'>> } };

export type BlogPostQueryVariables = {};

export type BlogPostQuery = { allPost: { nodes: Array<Pick<Post, 'id' | 'path' | 'tags'>> } };

export type RandomPostQueryVariables = {};

export type RandomPostQuery = {
    allPost: {
        nodes: Array<
            Pick<
                Post,
                'id' | 'path' | 'title' | 'tags' | 'excerpt' | 'draft' | 'date' | 'body' | 'featuredImagePosition'
            > & {
                featuredImage: Maybe<
                    Pick<File, 'publicURL'> & {
                        sharp: Maybe<{
                            fluid: Maybe<
                                Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes' | 'originalName'>
                            >;
                        }>;
                    }
                >;
                imageTwitter: Pick<File, 'publicURL'>;
                imageFacebook: Pick<File, 'publicURL'>;
            }
        >;
    };
};

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFluidFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpResolutionsFragment = Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpSizesFragment = Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type PagesQueryQueryVariables = {};

export type PagesQueryQuery = { allSitePage: { nodes: Array<Pick<SitePage, 'path'>> } };

export type RecentPostsQueryVariables = {};

export type RecentPostsQuery = { allPost: { nodes: Array<Pick<Post, 'title' | 'path'>> } };

export type GetImagesQueryVariables = {};

export type GetImagesQuery = {
    allImagesJson: {
        edges: Array<{
            node: {
                gallery: Maybe<
                    Array<
                        Maybe<
                            Pick<ImagesJsonGallery, 'title'> & {
                                image: Maybe<
                                    Pick<File, 'name' | 'relativeDirectory'> & {
                                        childImageSharp: Maybe<{
                                            fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment>;
                                        }>;
                                    }
                                >;
                            }
                        >
                    >
                >;
            };
        }>;
    };
};

export type GetRelatedPostsQueryVariables = {};

export type GetRelatedPostsQuery = { allPost: { nodes: Array<Pick<Post, 'title' | 'path' | 'date' | 'tags'>> } };

export type SiteMetaDataQueryVariables = {};

export type SiteMetaDataQuery = {
    site: Maybe<{
        siteMetadata: Maybe<
            Pick<
                SiteSiteMetadata,
                | 'siteTitle'
                | 'siteUrl'
                | 'authorName'
                | 'siteDescription'
                | 'twitterUsername'
                | 'headerTitle'
                | 'headerLinksIcon'
            > & {
                headerLinks: Maybe<Array<Maybe<Pick<SiteSiteMetadataHeaderLinks, 'label' | 'url'>>>>;
                footerLinks: Maybe<
                    Array<
                        Maybe<
                            Pick<SiteSiteMetadataFooterLinks, 'sectionName'> & {
                                links: Maybe<Array<Maybe<Pick<SiteSiteMetadataFooterLinksLinks, 'label' | 'url'>>>>;
                            }
                        >
                    >
                >;
            }
        >;
    }>;
};

export type SiteImagesQueryVariables = {};

export type SiteImagesQuery = {
    allFile: {
        edges: Array<{
            node: Pick<File, 'relativePath'> & {
                childImageSharp: Maybe<{
                    fixed: Maybe<
                        Pick<
                            ImageSharpFixed,
                            | 'base64'
                            | 'tracedSVG'
                            | 'aspectRatio'
                            | 'width'
                            | 'height'
                            | 'src'
                            | 'srcSet'
                            | 'srcWebp'
                            | 'srcSetWebp'
                            | 'originalName'
                        >
                    >;
                    fluid: Maybe<
                        Pick<
                            ImageSharpFluid,
                            | 'base64'
                            | 'tracedSVG'
                            | 'aspectRatio'
                            | 'src'
                            | 'srcSet'
                            | 'srcWebp'
                            | 'srcSetWebp'
                            | 'sizes'
                            | 'originalImg'
                            | 'originalName'
                            | 'presentationWidth'
                            | 'presentationHeight'
                        >
                    >;
                }>;
            };
        }>;
    };
};

export type BlogListQueryVariables = {};

export type BlogListQuery = { allPost: { nodes: Array<Pick<Post, 'excerpt' | 'date' | 'title' | 'path' | 'tags'>> } };

export type TagsQueryVariables = {};

export type TagsQuery = { allPost: { group: Array<Pick<PostGroupConnection, 'fieldValue' | 'totalCount'>> } };

export type BlogPostShareImageQueryVariables = {
    id: Scalars['String'];
};

export type BlogPostShareImageQuery = {
    post: Maybe<Pick<Post, 'title' | 'timeToRead'> & { featuredImage: Maybe<Pick<File, 'publicURL'>> }>;
};

export type BlogPostByIdQueryVariables = {
    id?: Maybe<Scalars['String']>;
};

export type BlogPostByIdQuery = {
    post: Maybe<
        Pick<
            Post,
            'id' | 'path' | 'title' | 'tags' | 'excerpt' | 'draft' | 'date' | 'body' | 'featuredImagePosition'
        > & {
            featuredImage: Maybe<
                Pick<File, 'publicURL'> & { sharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }
            >;
            imageTwitter: Pick<File, 'publicURL'>;
            imageFacebook: Pick<File, 'publicURL'>;
        }
    >;
};

export type PageByIdQueryVariables = {
    id: Scalars['String'];
};

export type PageByIdQuery = {
    page: Maybe<
        Pick<Page, 'id' | 'path' | 'title' | 'body' | 'featuredImagePosition'> & {
            featuredImage: Maybe<
                Pick<File, 'publicURL'> & { sharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }
            >;
        }
    >;
};

export type PostsByTagQueryVariables = {
    tagRegex: Scalars['String'];
};

export type PostsByTagQuery = { allPost: { nodes: Array<Pick<Post, 'date' | 'title' | 'tags' | 'path' | 'excerpt'>> } };
