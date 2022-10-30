import { useIntl } from 'react-intl';

/**
 * @usage
 * const locale = useLocale()
 *
 * const result = locale({id: 'json key'})
 *
 * result: "json value"
 *
 * @returns formatMessage func
 */

const useLocale = () => {
  const intl = useIntl();
  return intl.formatMessage;
};

export default useLocale;
