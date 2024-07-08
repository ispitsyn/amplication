export type Skill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  proficiency?: "Option1" | null;
  skillName: string | null;
  skillProficiency?: "Option1" | null;
};
