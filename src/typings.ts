export interface LinkListItemI {
  name: string;
  link: string;
}

export interface Breadcrumb {
  title: string;
  name?: string;
}

export interface RouterTile {
  name: string;
  title: string;
}

export interface Member {
  name: string;
  image?: string;
}

export interface VoiceTableRow {
  sopran: Member;
  alt: Member;
  tenor: Member;
  bas: Member;
}

export interface Photo {
  id: string;
  path: string;
  alt: string;
  path_f?: string;
  type?: string;
}

export enum SnackbarVariant {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
}

export enum SnackbarStatus {
  COPY_SUCCESS = 'copySuccess',
  COPY_ERROR = 'copyError',
  SEND_SUCCESS = 'sendSuccess',
  SEND_ERROR = 'sendError',
  INVALID_FORM_DATA = 'invalidFormData',
}

export enum FormField {
  NAME = 'name',
  SURNAME = 'surname',
  EMAIL = 'email',
  MESSAGE = 'message',
}
