import { ServiceModel } from "../models/service";
import { Service } from "../../../domain/service";

type Filter = {
  hall_id?: string;
  service_id?: string;
};

type ServiceUpdate = {
  name?: string;
  duration?: string;
  price?: string;
};

const create = async (body: Service) => {
  const result = await ServiceModel.create(body);
  return result;
};

const find = async (filter: Filter) => {
  const result = await ServiceModel.find(filter);
  return result;
};

const update = async (
  filter: Filter,
  update: ServiceUpdate,
  options: any = {}
) => {
  const updated = await ServiceModel.findOneAndUpdate(filter, update, options);
  const finded = await ServiceModel.findOne(filter);
  return finded;
};

const findOne = async (filter: Filter) => {
  const result = await ServiceModel.findOne(filter);
  return result;
};

const findAndDelete = async (filter: Filter) => {
  const result = await ServiceModel.findOneAndDelete(filter);
  return result;
};

export default {
  create,
  find,
  update,
  findOne,
  findAndDelete,
};
