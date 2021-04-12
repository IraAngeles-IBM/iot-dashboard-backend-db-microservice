

module.exports = function(sequelize, DataTypes){
    return sequelize.define('meter_reading', {
        Datetime : {
            type: DataTypes.DATE,
        },
        mw_reading : {
            type: DataTypes.DECIMAL(6,2)
        }
    }, {
        tableName: 'meter_reading',
        freezeTableName: true,
        timestamps: false
    });
};
