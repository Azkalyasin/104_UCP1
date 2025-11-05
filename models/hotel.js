module.exports = (sequelize, DataTypes) => {
  const hotel = sequelize.define(
    "hotel",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipe_kamar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kapasitas_tamu: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lantai: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fasilitas :{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tanggal_pesan: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "hotel",
      frezeTableName: true,
      timestamps: true,
    }
  );
  return hotel;
};
