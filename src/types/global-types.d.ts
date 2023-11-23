declare namespace BTypes {
  type FCChildren<T = React.ReactNode> = { children?: T };

  type NPage<T = {}, U extends boolean = false> = (
    props: T,
  ) => U extends true ? Promise<React.ReactElement> : React.ReactElement;

  type NLPage<T = {}, U extends boolean = false> = NPage<T & FCChildren, U>;

  type FCProps<
    T = {},
    U = {},
    V extends boolean = true,
    W extends boolean = true,
    X = React.ReactNode,
  > = (W extends true ? FCChildren<X> : {}) &
    (V extends true ? Omit<React.HTMLAttributes<U>, 'children'> : Omit<U, 'children'>) &
    T;

  type FC<
    T = {},
    U = {},
    V extends boolean = true,
    W extends boolean = true,
    X = React.ReactNode,
  > = (props: FCProps<T, U, V, W, X>) => React.ReactElement;

  type FCIcon<T = {}> = (props: React.SVGProps<SVGSVGElement> & T) => React.ReactElement;

  type Full<T> = {
    [P in keyof T]-?: T[P];
  };
}
