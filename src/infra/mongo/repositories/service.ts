import { ServiceModel } from "../models/service";
import { Service } from "../../../domain/service";

type Filter = {
  name?: string;
  duration?: string;
  price?: string;
  hall_id?: string;
};

const create = async (body: Service) => {
  const result = await ServiceModel.create(body);
  return result;
};

const find = async () => {
  const result = await ServiceModel.find();
  return result;
};

const findOne = async (filter: Filter) => {
  const result = await ServiceModel.findOne(filter);
  return result;
};

export default {
  create,
  find,
  findOne,
};
