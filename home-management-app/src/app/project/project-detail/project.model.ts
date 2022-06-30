import { ProjectScope } from "../project-scope.model";

export class Project {
  constructor(
    public id?: string,
    public name?: string,
    public room?: string,
    public description?: string,
    public status?: string,
    public grandTotal?: number,
    public estTotal?: number,
    public created?: Date,
    public scope?: string,
  ) {}
}
