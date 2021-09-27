export const effect = ({ json }: { json: any }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(json);
      } else {
        reject({ error: "Foo" });
      }
    }, Math.random() * 1000);
  });
};
