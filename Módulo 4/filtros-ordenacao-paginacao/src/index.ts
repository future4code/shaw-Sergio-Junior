import { app } from "./app";
import { exercicio1a } from "./endpoints/exercicio1a";
import { exercicio1b } from "./endpoints/exercicio1b";
import { exercicio3 } from "./endpoints/exercicio3";
import { exercicio2 } from "./endpoints/exercicio2";
import { exercicio4 } from "./endpoints/exercicio4";

// EX 1 
// a)
app.get("/user", exercicio1a)
// b)
app.get("/user/:type", exercicio1b)
//EX 2
app.get("/ordersort", exercicio2)
//EX 3 
app.get("/usersPages", exercicio3)
//EX 4 
app.get("/allfilters", exercicio4)
