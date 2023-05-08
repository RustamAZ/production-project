export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType
}

export interface ArtcileCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE,
    code: string,
}

export interface ArtcileImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string,
}

export interface ArtcileTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT,
    paragraphs: string[],
    title: string,
}

export type ArticleBlock = ArtcileTextBlock | ArtcileImageBlock | ArtcileCodeBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}
