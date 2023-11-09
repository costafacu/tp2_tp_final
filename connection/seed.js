import { Role } from "../Models/index.js";


async function seedRoles() {
    console.log("Validando si hay que correr seeders");
    const roleCount = await Role.count();

    if (roleCount === 0) {
        console.log("Corriendo seeders")
        await Role.bulkCreate([
            { name: "Admin" },
            { name: "Usuario" }
        ]);
    } else {
        console.log("No hace falta correr seeders")
    }
}


export { seedRoles };