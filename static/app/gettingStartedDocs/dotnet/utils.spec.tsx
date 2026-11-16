import type {DocsParams} from 'sentry/components/onboarding/gettingStartedDoc/types';
import type {PlatformKey} from 'sentry/types/platform';

import {getInstallSnippetCoreCli} from './utils';

const params = (platformKey: PlatformKey) =>
  ({
    platformKey,
    sourcePackageRegistries: {
      isLoading: false,
      data: {'sentry.dotnet.aspnetcore': {version: '1.99.9'}},
    },
  }) as unknown as DocsParams;

describe('getInstallSnippetCoreCli', () => {
  it("installs the platform's own package", () => {
    expect(getInstallSnippetCoreCli(params('dotnet-awslambda'))).toBe(
      '\ndotnet add package Sentry.AspNetCore -v 1.99.9'
    );
  });
});
