import { Bloc } from "@/Bloc";
import { CounterEvent, DecreaseCounter, IncreaseCounter } from "@/components/CounterBloc/CounterEvent";
import { CounterFailure, CounterState } from "@/components/CounterBloc/CounterState";
import { RandomUtils } from "@/utils/random.utils";

export class CounterBloc extends Bloc<CounterEvent, CounterState> {
  constructor() {
    super(new CounterState(1));
  }

  protected async* mapEventToState(event: CounterEvent) {
    switch (event.constructor) {
      case IncreaseCounter:
        yield* this.increaseCounter(event);
        break;
      case DecreaseCounter:
        yield* this.decreaseCounter(event);
        break;
    }
  }

  private async* increaseCounter(event: CounterEvent) {
    if (RandomUtils.nextInt(50) % 5 != 1) {
      const number = this.state.num + 1;
      yield new CounterState(number);
    } else {
      yield new CounterFailure(this.state.num);
    }
  }

  private async* decreaseCounter(event: CounterEvent) {
    if (RandomUtils.nextInt(50) % 5 != 2) {
      const number = this.state.num - 1;
      yield new CounterState(number);
    } else {
      yield new CounterFailure(this.state.num);
    }
  }
}
