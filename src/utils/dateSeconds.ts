export function dateToSeconds(input: string | Date): number {
  let date: Date;

  if (input instanceof Date) {
    date = input;
  } else {
    date = new Date(input);

    if (isNaN(date.getTime())) {
      throw new Error("Data inválida");
    }
  }

  // getTime() retorna milissegundos → dividir por 1000 para segundos
  return Math.floor(date.getTime() / 1000);
}