import Ky, { type Options } from 'ky';

type Props = {
  baseUrl?: string;
};

export class KyFactory {
  constructor(private props: Props) {}
  create = (options?: Omit<Options, 'hooks'>): typeof Ky => {
    return Ky.create({
      prefixUrl: this.props.baseUrl,
      ...options,
    });
  };
}
