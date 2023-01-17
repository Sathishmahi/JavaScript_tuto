var user="admin";

switch (user) {
    case "admin":
        console.log("access from all");
        break;

    case "user":
        console.log("access from courses only");
        break;
        
    case "subAdmin":
        console.log("access from create and delete courses ");
        break;

    default:
        console.log("trail user");
        break;
}