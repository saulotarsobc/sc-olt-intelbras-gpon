import snmp from "snmp-native";

// todo: remover
import dotenv from "dotenv";
dotenv.config();

export const snmpGet = async (oid: any) => {
    return new Promise((resolve, reject) => {

        const snmpSession = new snmp.Session({
            // todo: pegar esses dados vindo do frontend ???
            host: process.env.OLT_IP,
            port: 161,
            // todo: pegar esses dados vindo do frontend ???
            community: process.env.OLT_CM,
        });

        const oid_convertido = oid
            .split('.')
            .filter(function (s: any) { return s.length > 0; })
            .map(function (s: any) { return parseInt(s, 10); });

        snmpSession.get({ oid: oid_convertido }, (error, varbinds) => {
            if (error) {
                reject(error.message)
            } else {
                resolve(varbinds[0].value);
            }
            snmpSession.close();
        });
    });
};

// setTimeout(async () => {
//     const res = await snmpGet("1.3.6.1.4.1.2021.11.9.0");
//     console.log({ res });
// });