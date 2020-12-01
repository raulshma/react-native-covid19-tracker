export const fetcherAll = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((items) => {
      const dataObj = {
        cases: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
        },
        recovered: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
        },
        deaths: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
        },
      };
      for (let i in items.cases) {
        const d = new Date(i).getMonth();
        dataObj.cases[d] = dataObj.cases[d] + items.cases[i] ?? 0;
      }
      for (let i in items.recovered) {
        const d = new Date(i).getMonth();
        dataObj.recovered[d] = dataObj.recovered[d] + items.recovered[i] ?? 0;
      }
      for (let i in items.deaths) {
        const d = new Date(i).getMonth();
        dataObj.deaths[d] = dataObj.deaths[d] + items.deaths[i] ?? 0;
      }
      const actualData = Array.from({ length: 12 }, (_, i) => i + 1)
        .map((e) => {
          if (
            dataObj.cases[e] == 0 &&
            dataObj.recovered[e] == 0 &&
            dataObj.deaths[e] == 0
          )
            return null;
          return {
            cases: dataObj.cases[e],
            recovered: dataObj.recovered[e],
            deaths: dataObj.deaths[e],
          };
        })
        .filter((e) => e != null);
      return { arr: actualData, count: actualData.length };
    });
