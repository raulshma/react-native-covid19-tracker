export const fetcherAll = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((items) => {
      let new_items;
      for (let i in items.cases) {
        new_items.cases.push({ date: i, count: items.cases[i] });
      }
      for (let i in items.recovered) {
        new_items.recovered.push({ date: i, count: items.recovered[i] });
      }
      for (let i in items.deaths) {
        new_items.deaths.push({ date: i, count: items.deaths[i] });
      }
      if (!new_items) {
        return { cases: [], recovered: [], deaths: [] };
      }
      return new_items;
    });
