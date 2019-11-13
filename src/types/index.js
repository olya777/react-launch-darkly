// @flow
export type LdClientWrapperType = {
  on: (string, (FlagValueType) => void) => void,
  onReady: (() => void) => void,
  variation: (string, boolean) => FlagValueType
};

export type FeatureFlagType = {
  flagKey: string,
  renderFeatureCallback: FlagValueType => ?React$Element<any>,
  renderDefaultCallback?: () => ?React$Element<any>,
  initialRenderCallback?: () => ?React$Element<any>
};

export type ConfigType = {
  clientId: string,
  user: UserType,
  clientOptions: ClientOptionsType,
  controlTest?: FlagTest,
  challengerTest?: FlagTest
};

export type UserType = {
  // https://docs.launchdarkly.com/docs/js-sdk-reference#section-users
  key: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  custom?: any
};

export type FlagValueType = string | any | boolean;

export type ClientOptionsType = {
  // https://docs.launchdarkly.com/docs/js-sdk-reference#section-bootstrapping
  // Additionally used for SSR when an any
  bootstrap?: string | { [flagKey: string]: FlagValueType },

  // https://docs.launchdarkly.com/docs/js-sdk-reference#section-secure-mode
  hash?: string,

  // https://github.com/launchdarkly/js-client/blob/master/src/index.js#L241-L243
  baseUrl?: string,
  eventsUrl?: string,
  streamUrl?: string,

  disableClient?: boolean
};

export type Flags = {
  [flagKey: string]: string
};

export type FlagTest = (flagValue: FlagValueType) => boolean;
