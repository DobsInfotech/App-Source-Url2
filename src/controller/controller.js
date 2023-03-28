var { Todo, Todo2 } = require("../model/schema");
const HTTP = require("../../constant/response.constant");

class class1 {
  static a = async (req, res) => {
    try {
      var OriginalData = await Todo.find({});
      res.render("First", { OriginalData });
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static b = async (req, res) => {
    try {
      res.render("Add");
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static c = async (req, res) => {
    try {
      if (req.body.Image && req.body.Primaryurl && req.body.Secondaryurl) {
        if (req.params.id1 == "horizontal") {
          var OriginalData = await Todo2.find({});
        } else {
          var OriginalData = await Todo.find({});
        }
        if (OriginalData.length == 0) {
          var a = 1;
        } else {
          var a = OriginalData[OriginalData.length - 1].id + 1;
        }

        if (req.params.id1 == "horizontal") {
          let data = new Todo2({
            id: a,
            Image: req.body.Secondaryurl,
            Name: req.body.Image,
            Source: req.body.Primaryurl,
          });
          await data.save();
        } else {
          let data = new Todo({
            id: a,
            Image: req.body.Secondaryurl,
            Name: req.body.Image,
            Source: req.body.Primaryurl,
          });
          await data.save();
        }
      }
      res.redirect(`/Add/${req.params.id1}`);
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static d = async (req, res) => {
    try {
      if (req.params.id1 == "horizontal") {
        var Data = await Todo2.find({});
      } else {
        var Data = await Todo.find({});
      }
      var OriginalData = [];
      for (var i = 0; i < Data.length; i++) {
        var a = {
          _id: Data[i]._id,
          Image: Data[i].Image,
          Name: Data[i].Name,
          Source: Data[i].Source,
          __v: 0,
        };
        OriginalData.push(a);
      }
      res.send(OriginalData);
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static e = async (req, res) => {
    try {
      if (req.params.id1 == "horizontal") {
        var OriginalData = await Todo2.find({});
      } else {
        var OriginalData = await Todo.find({});
      }
      var data = req.params.id1;
      res.render("Delete", { OriginalData, data });
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static f = async (req, res) => {
    try {
      if (req.params.id1 == "horizontal") {
        await Todo2.find({ id: req.params.id }).deleteOne();
      } else {
        await Todo.find({ id: req.params.id }).deleteOne();
      }
      res.redirect(`/delete/${req.params.id1}`);
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static h = async (req, res) => {
    try {
      if (req.params.id1 == "horizontal") {
        var OriginalData = await Todo2.find({});
      } else {
        var OriginalData = await Todo.find({});
      }
      var data = req.params.id1;
      var data2 = req.url;
      res.render("updatePage", { OriginalData, data, data2 });
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static i = async (req, res) => {
    try {
      if (req.params.id1 == "horizontal") {
        var OriginalData = await Todo2.find({ id: req.params.id });
      } else {
        var OriginalData = await Todo.find({ id: req.params.id });
      }
      var data = req.params.id1;
      res.render(`update`, { OriginalData });
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static j = async (req, res) => {
    try {
      if (req.params.id1 == "horizontal") {
        var data = await Todo2.find({ id: req.params.id });
      } else {
        var data = await Todo.find({ id: req.params.id });
      }
      data[0].Name = req.body.Image;
      data[0].Image = req.body.Secondaryurl;
      data[0].Source = req.body.Primaryurl;
      await data[0].save();
      if (req.params.id1 == "horizontal") {
        res.redirect("/update/page/horizontal");
      } else {
        res.redirect("/update/page/vertical");
      }
    } catch (e) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
}

module.exports = { class1 };
