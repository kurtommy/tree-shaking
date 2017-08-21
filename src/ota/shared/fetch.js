export function fetch({ search, config }) {
  const clonedFetchRequest = {
    search: Object.assign({}, search),
    config: Object.assign({}, config)
  };
  return clonedFetchRequest;
}
