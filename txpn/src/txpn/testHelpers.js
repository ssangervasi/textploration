
export function multiBefore(describe, beforeAll, beforeEach) {
  return {
    configure: function configure(configs) {
      return {
        run: function run(test) {
          configs.forEach((config, i) => {
            describe(`Config: ${config.label || i}`, () => {
              if (config.beforeAll) {
                beforeAll(config.beforeAll);
              }
              if (config.beforeEach) {
                beforeEach(config.beforeEach);
              }
              test();
            });
          });
        }
      };
    }
  };
}
