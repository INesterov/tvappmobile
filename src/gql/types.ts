/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePrograms
// ====================================================

export interface UpdatePrograms {
  updatePrograms: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Filters
// ====================================================

export interface Filters_channels {
  id: string;
  title: string;
}

export interface Filters {
  types: string[] | null;
  channels: Filters_channels[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Program
// ====================================================

export interface Program_program {
  title: string;
  photo: string | null;
  description: string;
  channel_id: string;
  type: string | null;
  from: string;
}

export interface Program {
  program: Program_program;
}

export interface ProgramVariables {
  id: string;
}

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

export interface Programs {
  programs: Programs_programs[];
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
