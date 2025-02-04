function combine(...objects) {
  return objects.reduce((acc, obj) => {
    for (const key in obj) {
      acc[key] = (acc[key] || 0) + obj[key];
    }
    return acc;
  }, {});
}