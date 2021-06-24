export interface LinkListItemI {
  name: string;
  link: string;
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
