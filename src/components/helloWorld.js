(() => ({
  name: 'HelloWorld',
  type: 'BODY_COMPONENT',
  icon: 'TitleIcon',
  orientation: 'HORIZONTAL',
  allowedTypes: [],
  jsx: (() => {
    const { env, useText, Link } = B;
    const { externalPageTo, internalPageTo, linkType } = options;
    const hasLink = linkType !== 'noLink';
    const hasExternalLink = linkType === 'external';
    const hasInternalLink = linkType === 'internal';
    const isDev = env === 'dev';

    const Tag = {
      Title1: 'h1',
      Title2: 'h2',
      Title3: 'h3',
      Title4: 'h4',
      Title5: 'h5',
      Title6: 'h6',
      Body1: 'p',
      Body2: 'p',
    }[options.type || 'Title1'];

    function devEnv() {
      return (
        <div>
          <Tag className={classes.root}>{useText(options.content)}</Tag>
        </div>
      );
    }

    function prodEnv() {
      return (
        <div>
          <Tag className={classes.root}>
            {useText(options.content)}
            <br />
            {hasLink && hasExternalLink ? (
              <a
                className={classes.root}
                href={externalPageTo}
                rel="noopener noreferrer"
                target="_blank"
              >
                Follow link
              </a>
            ) : (
              <Link
                className={classes.root}
                href={internalPageTo}
                endpoint={internalPageTo}
              >
                Follow link
              </Link>
            )}
          </Tag>
        </div>
      );
    }

    return isDev ? devEnv() : prodEnv();
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      root: {
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        margin: 0,
        paddingTop: ({ options: { padding } }) =>
          style.getSpacing(padding[0], 'Desktop'),
        paddingRight: ({ options: { padding } }) =>
          style.getSpacing(padding[1], 'Desktop'),
        paddingBottom: ({ options: { padding } }) =>
          style.getSpacing(padding[2], 'Desktop'),
        paddingLeft: ({ options: { padding } }) =>
          style.getSpacing(padding[3], 'Desktop'),
        fontFamily: ({ options: { type } }) => style.getFontFamily(type),
        fontSize: ({ options: { type } }) => style.getFontSize(type),
        textTransform: ({ options: { type } }) => style.getTextTransform(type),
        fontWeight: ({ options: { type } }) => style.getFontWeight(type),
        letterSpacing: ({ options: { type } }) => style.getLetterSpacing(type),
        textAlign: ({ options: { align } }) => align,
        color: ({ options: { color } }) => style.getColor(color),
      },
    };
  },
}))();
