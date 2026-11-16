import type {DocsParams} from 'sentry/components/onboarding/gettingStartedDoc/types';
import type {PlatformKey} from 'sentry/types/platform';
import {getPackageVersion} from 'sentry/utils/gettingStartedDocs/getPackageVersion';

const platformPackages: Partial<
  Record<PlatformKey, {name: string; registryKey: string}>
> = {
  'dotnet-aspnet': {name: 'Sentry.AspNet', registryKey: 'sentry.dotnet.aspnet'},
  'dotnet-aspnetcore': {
    name: 'Sentry.AspNetCore',
    registryKey: 'sentry.dotnet.aspnetcore',
  },
  'dotnet-awslambda': {
    name: 'Sentry.AspNetCore',
    registryKey: 'sentry.dotnet.aspnetcore',
  },
  'dotnet-gcpfunctions': {
    name: 'Sentry.Google.Cloud.Functions',
    registryKey: 'sentry.dotnet.google-cloud-function',
  },
  'dotnet-maui': {name: 'Sentry.Maui', registryKey: 'sentry.dotnet.maui'},
};

const getPackage = (params: DocsParams) =>
  platformPackages[params.platformKey] ?? {name: 'Sentry', registryKey: 'sentry.dotnet'};

export const getInstallSnippetPackageManager = (params: DocsParams) => {
  const {name, registryKey} = getPackage(params);
  return `
Install-Package ${name} -Version ${getPackageVersion(params, registryKey, '7.0.0')}`;
};

export const getInstallSnippetCoreCli = (params: DocsParams) => {
  const {name, registryKey} = getPackage(params);
  return `
dotnet add package ${name} -v ${getPackageVersion(params, registryKey, '7.0.0')}`;
};
