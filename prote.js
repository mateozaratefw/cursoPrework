function calcularLaProte(carbs, proteinas, grasas);
{
    var valores = carbs + proteinas + grasas;
    var resultadoGrasas = grasas/valores;
    var resultadoCarbs = carbs/valores;
    var resultadoProteinas = proteinas/valores;
}

console.log(calcularLaProte(120, 30, 10));
