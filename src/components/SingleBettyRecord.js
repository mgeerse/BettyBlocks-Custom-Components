(() => ({
  name: 'Custom Single Betty Record',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { GetOne, Property } = B;
    const { model, filter, property } = options;

    return (
      <div className={classes.root}>
        <GetOne modelId={model} filter={filter}>
          {({ loading, error, data }) => {
            if (loading) {
              return <span>loading...</span>;
            }

            if (error) {
              return <span>Error: {error.message}</span>;
            }

            if (data) {
              return <Property id={property} />;
            }

            return <></>;
          }}
        </GetOne>
      </div>
    );
  })(),
  styles: B => theme => {
    // eslint-disable-next-line no-unused-vars
    const style = new B.Styling(theme);
    return {
      root: {
        backgroundColor: '#F0F1F5',
        borderColor: '#AFB5C8',
        borderWidth: '0.0625rem',
        justifyContent: 'center',
        borderStyle: 'dashed',
        height: '100px',
        fontSize: '1rem',
        color: '#262A3A',
        textTransform: 'uppercase',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'center',
        alignItems: 'center',
      },
    };
  },
}))();
