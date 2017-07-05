export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .globalResources(
                'pragma-tabsheet/pragma-tabsheet'
            )
            .plugin("pragma-views", bridge => {
                bridge.useAll();
            });

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}