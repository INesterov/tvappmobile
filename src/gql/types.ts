/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Programs
// ====================================================

export interface Programs_programs {
  title: string;
  day: string;
  channel_id: string;
  type: string | null;
  description: string;
  category: string | null;
  country: string | null;
  photo: string | null;
  year: string | null;
  from: string;
  to: string;
  _id: string;
}

export interface Programs_channels {
  id: string;
  title: string;
}

export interface Programs {
  programs: Programs_programs[];
  types: string[] | null;
  channels: Programs_channels[];
}

export interface ProgramsVariables {
  day: string;
  channelId?: string[] | null;
  type?: string[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
