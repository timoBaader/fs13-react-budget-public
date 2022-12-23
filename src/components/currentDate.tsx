const currentDate = (): string => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateFormatted = `${year}-${month}-${day}`

  return (
    dateFormatted
  )
}

export default currentDate