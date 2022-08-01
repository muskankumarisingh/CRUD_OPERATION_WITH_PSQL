module.exports = (sequelize, DataType) => {
  const user = sequelize.define("User_Details", {
    USER_ID: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataType.BIGINT
      },
    USERNAME: {
        type:DataType.STRING,
        allowNull:true
    },
    CONTACT_NUMBER: {
        type: DataType.BIGINT,
        allowNull:true
    },
    PASSWORD:{
        type:DataType.STRING,
        allowNull: true
    },
    createdAt: {
        type:DataType.DATE,
        allowNull:true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP(6)')
    },
    updatedAt: {
        type:DataType.DATE,
        allowNull:true,
        defaultValue:sequelize.literal('CURRENT_TIMESTAMP(6)')
    }
    
  }
  , {
    hooks: {
      beforeCreate: (record, options) => {
        record.dataValues.createdAt = Math.floor(Date.now());
        record.dataValues.updatedAt = Math.floor(Date.now());
      },
      beforeUpdate: (record, options) => {
        console.log(Math.floor(Date.now()),"maths")
        record.dataValues.updatedAt = Math.floor(Date.now());
      }
    }
    }
  )
  user.associate = function (models){
  };
  return user;
};