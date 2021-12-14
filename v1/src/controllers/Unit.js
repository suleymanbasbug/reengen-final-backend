const {
  createService,
  getByFactoryIdService,
  editUnitService,
  deleteUnitService,
} = require("../services/Unit");
const httpStatus = require("http-status");

const create = (req, res) => {
  createService(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const findByFactoryId = (req, res) => {
  getByFactoryIdService(req.params.id)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const edit = (req, res) => {
  editUnitService(req.params.id, req.body)
    .then((num) => {
      if (num == 1) {
        res
          .status(httpStatus.OK)
          .send({ message: "Unit was updated successfully" });
      } else {
        res.status(httpStatus.NOT_FOUND).send({ message: "Unit not found" });
      }
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const destroy = (req, res) => {
  deleteUnitService(req.params.id)
    .then((num) => {
      if (num == 1) {
        res
          .status(httpStatus.OK)
          .send({ message: "Unit was deleted successfully" });
      } else {
        res.status(httpStatus.NOT_FOUND).send({ message: "Unit not found" });
      }
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};
module.exports = {
  create,
  findByFactoryId,
  edit,
  destroy,
};
