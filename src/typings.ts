export interface Breadcrumb {
  title: string;
  name?: string;
}

export interface ConductorI {
  id: string;
  description1: string;
  description2: string;
  photo: Photo;
}

export interface LinkListItemI {
  name: string;
  link: string;
}

export interface Member {
  name: string;
}

export interface Photo {
  id: string;
  path: string;
  alt: string;
  path_f?: string;
  path_thumb?: string;
  type?: string;
  type_f?: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  image?: string;
  image_mobile?: string;
  image_f?: string;
  image_mobile_f?: string;
  image_thumb?: string;
  image_type?: string;
  image_type_f?: string;
  image_alt?: string;
  image_ratio?: Ratio;
  date: string;
}

export interface RouterTile {
  name: string;
  title: string;
}

export interface VoiceTableRow {
  sopran: Member;
  alt: Member;
  tenor: Member;
  bas: Member;
}

export interface Ratio {
  width: number;
  height: number;
}

export enum FormField {
  NAME = 'name',
  SURNAME = 'surname',
  EMAIL = 'email',
  MESSAGE = 'message',
}

export enum SnackbarStatus {
  COPY_SUCCESS = 'copySuccess',
  COPY_ERROR = 'copyError',
  SEND_SUCCESS = 'sendSuccess',
  SEND_ERROR = 'sendError',
  INVALID_FORM_DATA = 'invalidFormData',
}

export enum SnackbarVariant {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
}
