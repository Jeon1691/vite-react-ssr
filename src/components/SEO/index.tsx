import { FC, DetailedHTMLProps, MetaHTMLAttributes } from 'react';
import { useInitialData } from '@/hooks/use-initial-data';
import { merge } from 'lodash';
import { Helmet } from 'react-helmet';

export interface SeoProps {
  title: string;
  description?: string;
  template?: boolean;
  image?: string;
  meta?:
    | DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement>[]
    | undefined;
}

export const Seo: FC<SeoProps> = (props) => {
  const {
    data: { username },
  } = useInitialData();
  const { title, description, meta, template = true } = props;

  return (
    <Helmet
      htmlAttributes={{ lang: 'ko-kr' }}
      title={title}
      titleTemplate={template ? `%s - ${'demo'}` : '%s'}
      meta={merge(
        [
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: template ? title + ' - ' + 'demo' : title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: 'og:image',
            content: props.image,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: username,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ],
        meta,
      )}
    />
  );
};

export { Seo as SEO };
