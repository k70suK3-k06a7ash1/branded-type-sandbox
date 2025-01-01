type Action<Type extends string, Payload> = {
  type: Type;
  payload: Payload;
};

type InferAction<A> = A extends Action<infer T, infer P>
  ? Action<T, P>
  : never;

type ActionCreator<Type extends string, Payload> = (
  payload: Payload,
) => Action<Type, Payload>;

const createAction = <Type extends string, Payload>(
  type: Type,
): ActionCreator<Type, Payload> => (payload) => ({ type, payload });

type IncrementAction = ReturnType<typeof createAction<'increment', number>>;
type DecrementAction = ReturnType<typeof createAction<'decrement', number>>;

type AppAction = InferAction<IncrementAction | DecrementAction>;

const increment = createAction<'increment', number>('increment');
const decrement = createAction<'decrement', number>('decrement');

const addAction: IncrementAction = increment(5); // OK
const subAction: DecrementAction = decrement(2); // OK

function dispatch(action: AppAction) {
  // ...
}