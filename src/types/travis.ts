/**
 * The root node of your build config.
 */
export interface Travis {
  arch?: Architecture[] | Architecture;
  compiler?: string[] | string;
  conditions?: ConditionsEnum;
  dist?: Distribution;
  env?: Array<EnvVarObject | string> | EnvObject | string;
  filter_secrets?: boolean;
  import?: Array<ImportsClass | string> | ImportsClass | string;
  jobs?: JobMatrixIncludesElement[] | PurpleJobMatrixIncludes;
  language?: Language;
  notifications?:
    | Array<Array<JwtClass | string> | boolean | NotificationClass | string>
    | boolean
    | NotificationsClass
    | string;
  os?: OS[] | OS;
  osx_image?: string[] | string;
  stack?: Stack;
  stages?: Array<StagesClass | string> | StagesClass | string;
  sudo?: boolean | string;
  trace?: boolean;
  version?: string;
  android?: TravisAndroid;
  jdk?: string[] | string;
  lein?: string;
  crystal?: string[] | string;
  dotnet?: string[] | string;
  mono?: string[] | string;
  solution?: string[] | string;
  d?: string[] | string;
  dart?: string[] | string;
  dart_task?: Array<PurpleDartTask | string> | FluffyDartTask | string;
  with_content_shell?: boolean;
  elixir?: string[] | string;
  otp_release?: string[] | string;
  elm?: string[] | string;
  elm_format?: string;
  elm_test?: string;
  node_js?: string[] | string;
  gimme_config?: TravisGimmeConfig;
  go?: string[] | string;
  go_import_path?: string;
  gobuild_args?: string;
  hhvm?: string[] | string;
  php?: string[] | string;
  ghc?: string[] | string;
  haxe?: string[] | string;
  hxml?: string[] | string;
  neko?: string;
  julia?: string[] | string;
  matlab?: string[] | string;
  nix?: string[] | string;
  npm_args?: string;
  perl?: string[] | string;
  perl6?: string[] | string;
  composer_args?: string;
  python?: string[] | string;
  virtualenv?: TravisVirtualenv;
  apt_packages?: string[] | string;
  bioc?: string;
  bioc_check?: boolean;
  bioc_packages?: string[] | string;
  bioc_required?: boolean;
  bioc_use_devel?: boolean;
  brew_packages?: string[] | string;
  cran?: string;
  disable_homebrew?: boolean;
  latex?: boolean;
  pandoc?: boolean;
  pandoc_version?: string;
  r?: string[] | string;
  r_binary_packages?: string[] | string;
  r_build_args?: string;
  r_check_args?: string;
  r_check_revdep?: boolean;
  r_github_packages?: string[] | string;
  r_packages?: string[] | string;
  remotes?: string;
  repos?: { [key: string]: any };
  warnings_are_errors?: boolean;
  bundler_args?: string;
  gemfile?: string[] | string;
  rvm?: string[] | string;
  podfile?: string;
  xcode_destination?: string;
  xcode_project?: string;
  xcode_scheme?: string[] | string;
  xcode_sdk?: string[] | string;
  xcode_workspace?: string;
  xctool_args?: string;
  rust?: string[] | string;
  sbt_args?: string;
  scala?: string[] | string;
  smalltalk?: string[] | string;
  smalltalk_config?: string[] | string;
  smalltalk_edge?: TravisSmalltalkEdge;
  smalltalk_vm?: string[] | string;
  addons?: Addons;
  after_deploy?: string[] | string;
  after_failure?: string[] | string;
  after_script?: string[] | string;
  after_success?: string[] | string;
  before_cache?: string[] | string;
  before_deploy?: string[] | string;
  before_install?: string[] | string;
  before_script?: string[] | string;
  branches?: string[] | Branches | string;
  cache?: boolean | CacheClass;
  deploy?:
    | Array<ProvidersClass | DeploymentsEnum>
    | DeploymentsClass
    | DeploymentsEnum;
  git?: Git;
  group?: string;
  if?: string;
  install?: string[] | string;
  script?: string[] | string;
  services?: Service[] | Service;
  virt?: Virtualization;
}

/**
 * Build addons enable additional built-in functionality, such as
 * installing build dependencies, system setup tasks, and integrations
 * with external services.
 */
export interface Addons {
  apt?: string[] | boolean | AptClass | string;
  apt_packages?: string[] | string;
  artifacts?: boolean | ArtifactsClass;
  browserstack?: boolean | BrowserstackClass;
  chrome?: Chrome;
  code_climate?: boolean | CodeClimateClass | string;
  coverity_scan?: boolean | CoverityScanClass;
  deploy?:
    | Array<ProvidersClass | DeploymentsEnum>
    | DeploymentsClass
    | DeploymentsEnum;
  firefox?: string;
  homebrew?: string[] | boolean | HomebrewClass | string;
  hostname?: string;
  hosts?: string[] | string;
  jwt?: Array<JwtClass | string> | JwtClass | string;
  mariadb?: string;
  pkg?: string[] | boolean | PkgClass | string;
  postgresql?: string;
  rethinkdb?: string;
  sauce_connect?: boolean | SauceConnectClass;
  snaps?: Array<SnapClass | string> | SnapsClass | string;
  sonarcloud?: boolean | SonarcloudClass;
  srcclr?: boolean | { [key: string]: any };
  ssh_known_hosts?: Array<JwtClass | string> | JwtClass | string;
}

export interface AptClass {
  config?: Config;
  dist?: string;
  packages?: string[] | string;
  sources?: Array<SourceClass | string> | SourcesClass | string;
  update?: boolean;
}

export interface Config {
  retries?: boolean;
}

export interface SourceClass {
  key_url?: string;
  name?: string;
  sourceline?: string;
}

export interface SourcesClass {
  key_url?: string;
  name?: string;
  sourceline?: string;
}

export interface ArtifactsClass {
  branch?: string;
  bucket?: string;
  cache_control?: string;
  concurrency?: number;
  debug?: boolean;
  enabled?: boolean;
  endpoint?: string;
  key?: JwtClass | string;
  log_format?: string;
  max_size?: number;
  paths?: string[] | string;
  permissions?: string;
  region?: string;
  secret?: JwtClass | string;
  target_paths?: string[] | string;
  working_dir?: string;
}

export interface JwtClass {
  secure?: string;
}

export interface BrowserstackClass {
  access_key?: JwtClass | string;
  app_path?: string;
  forcelocal?: boolean;
  only?: string;
  proxyHost?: string;
  proxyPass?: JwtClass | string;
  proxyPort?: string;
  proxyUser?: string;
  username?: JwtClass | string;
}

export enum Chrome {
  Beta = "beta",
  Stable = "stable",
}

export interface CodeClimateClass {
  repo_token?: JwtClass | string;
  secure?: string;
}

export interface CoverityScanClass {
  branch_pattern?: string;
  build_command?: string;
  build_command_prepend?: string;
  build_script_url?: string;
  notification_email?: JwtClass | string;
  project?: ProjectClass | string;
}

export interface ProjectClass {
  description?: string;
  name: string;
  version?: string;
}

export interface ProvidersClass {
  allow_failure?: boolean;
  app_name?: string;
  buildpack?: string;
  cleanup?: boolean;
  edge?: boolean | EdgeClass;
  logout?: boolean;
  manifest?: string;
  on?: string[] | Support | string;
  organization?: string;
  password?: PasswordObject | string;
  provider: DeploymentsEnum;
  run?: string[] | string;
  skip_cleanup?: boolean;
  space?: string;
  username?: UsernameObject | string;
  site?: string;
  slot?: string;
  verbose?: boolean;
  file?: string[] | string;
  key?: JwtClass | string;
  passphrase?: JwtClass | string;
  url?: string;
  user?: JwtClass | string;
  api?: string;
  region?: string;
  skip_ssl_validation?: boolean;
  app?: { [key: string]: string } | string;
  config_file?: string;
  env?: string[] | { [key: string]: string } | string;
  extra_args?: string;
  payload?: string;
  secret?: JwtClass | string;
  version?: string;
  allow_dirty?: boolean;
  token?: JwtClass | string;
  category?: string;
  client_key?: string;
  dir?: string;
  name?: string;
  user_id?: string;
  redeployment_hook?: JwtClass | string;
  api_key?: APIKeyObject | string;
  container?: string;
  dot_match?: boolean;
  glob?: string;
  access_key_id?: JwtClass | string;
  capabilities?: string[] | string;
  create_timeout?: number;
  output_file?: string;
  parameters?: string[] | string;
  promote?: boolean;
  role_arn?: string;
  secret_access_key?: JwtClass | string;
  stack_name?: string;
  stack_name_prefix?: string;
  sts_assume_role?: string;
  template?: string;
  wait?: boolean;
  wait_timeout?: number;
  v3?: boolean;
  application?: string;
  bucket?: string;
  bundle_type?: string;
  commit_id?: string;
  deployment_group?: string;
  description?: string;
  endpoint?: string;
  file_exists_behavior?: FileExistsBehavior;
  repository?: string;
  revision_type?: RevisionType;
  wait_until_deployed?: boolean;
  create?: boolean;
  env_file?: string;
  generation?: number;
  host?: string;
  install_url?: string;
  rack?: string;
  update_cli?: boolean;
  path?: string;
  target?: string;
  bucket_path?: string;
  debug?: boolean;
  label?: string;
  only_create_app_version?: boolean;
  zip_file?: string;
  account?: JwtClass | string;
  email?: JwtClass | string;
  migrate?: boolean | string;
  force?: boolean;
  message?: string;
  only?: string;
  project?: string;
  git?: JwtClass | string;
  config?: string[] | string;
  install_sdk?: boolean;
  keyfile?: string;
  no_promote?: boolean;
  no_stop_previous_version?: boolean;
  stop_previous_version?: boolean;
  verbosity?: string;
  acl?: string;
  cache_control?: string[] | string;
  detect_encoding?: boolean;
  key_file?: string;
  local_dir?: string;
  upload_dir?: string;
  allow_empty_commit?: boolean;
  allow_same_branch?: boolean;
  base_branch?: string;
  branch?: string;
  commit_message?: string;
  deploy_key?: string;
  enterprise?: boolean;
  repo?: string;
  key_name?: string;
  publish?: boolean;
  cli_version?: string;
  controller?: string;
  strategy?: ProvidersStrategy;
  dead_letter_arn?: string;
  environment?: Array<JwtClass | string> | JwtClass | string;
  function_name?: string;
  function_tags?: Array<JwtClass | string> | JwtClass | string;
  handler_name?: string;
  kms_key_arn?: string;
  layers?: string[] | string;
  memory_size?: string;
  module_name?: string;
  role?: string;
  runtime?: string;
  security_group_ids?: string[] | string;
  subnet_ids?: string[] | string;
  timeout?: number | string;
  tracing_mode?: TracingMode;
  zip?: string;
  oauth_token?: JwtClass | string;
  oauth_token_secret?: JwtClass | string;
  slug?: string;
  auth?: JwtClass | string;
  functions?: string;
  prod?: boolean;
  access?: Access;
  api_token?: JwtClass | string;
  auth_method?: string;
  registry?: string;
  src?: string;
  tag?: string;
  server?: string;
  app_id?: string;
  custom_json?: string;
  instance_ids?: string[] | string;
  layer_ids?: string[] | string;
  update_on_success?: boolean;
  connect_timeout?: number;
  dist?: string;
  package_glob?: string[] | string;
  read_timeout?: number;
  write_timeout?: number;
  committer_from_gh?: boolean;
  deployment_file?: boolean;
  fqdn?: string;
  keep_history?: boolean;
  project_name?: string;
  target_branch?: string;
  distributions?: string;
  docs_dir?: string;
  remove_build_dir?: boolean;
  setuptools_version?: string;
  skip_existing?: boolean;
  skip_upload_docs?: boolean;
  twine_check?: boolean;
  twine_version?: string;
  upload_docs?: boolean;
  wheel_version?: string;
  draft?: boolean;
  file_glob?: boolean;
  overwrite?: boolean;
  prerelease?: boolean;
  release_notes?: string;
  release_notes_file?: string;
  release_number?: string;
  tag_name?: string;
  target_commitish?: string;
  gem?: { [key: string]: string } | string;
  gemspec?: string;
  gemspec_glob?: string;
  default_text_charset?: string;
  expires?: string[] | string;
  force_path_style?: boolean;
  index_document_suffix?: string;
  max_threads?: number;
  server_side_encryption?: boolean;
  storage_class?: string;
  remote?: string;
  script?: string;
  channel?: string;
  snap?: string;
  domain?: string;
  login?: JwtClass | string;
  advanced_options?: string;
  app_file?: string;
  auto_update?: boolean;
  notify?: boolean;
  symbols_file?: string;
  testers_groups?: string;
  hostname?: string;
}

export enum Access {
  Private = "private",
  Public = "public",
}

export interface APIKeyObject {
  secure?: JwtClass | string;
}

export interface EdgeClass {
  branch?: string;
  enabled?: boolean;
  source?: string;
}

export enum FileExistsBehavior {
  Disallow = "disallow",
  Overwrite = "overwrite",
  Retain = "retain",
}

export interface Support {
  all_branches?: boolean;
  branch?: string[] | { [key: string]: any } | string;
  condition?: string[] | string;
  os?: OS;
  repo?: string;
  tags?: boolean;
}

export enum OS {
  Freebsd = "freebsd",
  Linux = "linux",
  LinuxPpc64LE = "linux-ppc64le",
  Osx = "osx",
  Windows = "windows",
}

export interface PasswordObject {
  secure?: JwtClass | string;
}

export enum DeploymentsEnum {
  Anynines = "anynines",
  AzureWebApps = "azure_web_apps",
  Bintray = "bintray",
  Bluemixcloudfoundry = "bluemixcloudfoundry",
  Boxfuse = "boxfuse",
  Cargo = "cargo",
  ChefSupermarket = "chef_supermarket",
  Cloud66 = "cloud66",
  Cloudfiles = "cloudfiles",
  Cloudformation = "cloudformation",
  Cloudfoundry = "cloudfoundry",
  Codedeploy = "codedeploy",
  Convox = "convox",
  Datica = "datica",
  Elasticbeanstalk = "elasticbeanstalk",
  Engineyard = "engineyard",
  Firebase = "firebase",
  Flynn = "flynn",
  Gae = "gae",
  Gcs = "gcs",
  GitPush = "git_push",
  Gleis = "gleis",
  Hackage = "hackage",
  Hephy = "hephy",
  Heroku = "heroku",
  Lambda = "lambda",
  Launchpad = "launchpad",
  Netlify = "netlify",
  Npm = "npm",
  Openshift = "openshift",
  Opsworks = "opsworks",
  Packagecloud = "packagecloud",
  Pages = "pages",
  Puppetforge = "puppetforge",
  Pypi = "pypi",
  Releases = "releases",
  Rubygems = "rubygems",
  S3 = "s3",
  Scalingo = "scalingo",
  Script = "script",
  Snap = "snap",
  Surge = "surge",
  Testfairy = "testfairy",
  Transifex = "transifex",
}

export enum RevisionType {
  Github = "github",
  S3 = "s3",
}

export enum ProvidersStrategy {
  API = "api",
  Git = "git",
}

export enum TracingMode {
  Active = "Active",
  PassThrough = "PassThrough",
}

export interface UsernameObject {
  secure?: JwtClass | string;
}

export interface DeploymentsClass {
  allow_failure?: boolean;
  app_name?: string;
  buildpack?: string;
  cleanup?: boolean;
  edge?: boolean | EdgeClass;
  logout?: boolean;
  manifest?: string;
  on?: string[] | Support | string;
  organization?: string;
  password?: PasswordObject | string;
  provider: DeploymentsEnum;
  run?: string[] | string;
  skip_cleanup?: boolean;
  space?: string;
  username?: UsernameObject | string;
  site?: string;
  slot?: string;
  verbose?: boolean;
  file?: string[] | string;
  key?: JwtClass | string;
  passphrase?: JwtClass | string;
  url?: string;
  user?: JwtClass | string;
  api?: string;
  region?: string;
  skip_ssl_validation?: boolean;
  app?: { [key: string]: string } | string;
  config_file?: string;
  env?: string[] | { [key: string]: string } | string;
  extra_args?: string;
  payload?: string;
  secret?: JwtClass | string;
  version?: string;
  allow_dirty?: boolean;
  token?: JwtClass | string;
  category?: string;
  client_key?: string;
  dir?: string;
  name?: string;
  user_id?: string;
  redeployment_hook?: JwtClass | string;
  api_key?: APIKeyObject | string;
  container?: string;
  dot_match?: boolean;
  glob?: string;
  access_key_id?: JwtClass | string;
  capabilities?: string[] | string;
  create_timeout?: number;
  output_file?: string;
  parameters?: string[] | string;
  promote?: boolean;
  role_arn?: string;
  secret_access_key?: JwtClass | string;
  stack_name?: string;
  stack_name_prefix?: string;
  sts_assume_role?: string;
  template?: string;
  wait?: boolean;
  wait_timeout?: number;
  v3?: boolean;
  application?: string;
  bucket?: string;
  bundle_type?: string;
  commit_id?: string;
  deployment_group?: string;
  description?: string;
  endpoint?: string;
  file_exists_behavior?: FileExistsBehavior;
  repository?: string;
  revision_type?: RevisionType;
  wait_until_deployed?: boolean;
  create?: boolean;
  env_file?: string;
  generation?: number;
  host?: string;
  install_url?: string;
  rack?: string;
  update_cli?: boolean;
  path?: string;
  target?: string;
  bucket_path?: string;
  debug?: boolean;
  label?: string;
  only_create_app_version?: boolean;
  zip_file?: string;
  account?: JwtClass | string;
  email?: JwtClass | string;
  migrate?: boolean | string;
  force?: boolean;
  message?: string;
  only?: string;
  project?: string;
  git?: JwtClass | string;
  config?: string[] | string;
  install_sdk?: boolean;
  keyfile?: string;
  no_promote?: boolean;
  no_stop_previous_version?: boolean;
  stop_previous_version?: boolean;
  verbosity?: string;
  acl?: string;
  cache_control?: string[] | string;
  detect_encoding?: boolean;
  key_file?: string;
  local_dir?: string;
  upload_dir?: string;
  allow_empty_commit?: boolean;
  allow_same_branch?: boolean;
  base_branch?: string;
  branch?: string;
  commit_message?: string;
  deploy_key?: string;
  enterprise?: boolean;
  repo?: string;
  key_name?: string;
  publish?: boolean;
  cli_version?: string;
  controller?: string;
  strategy?: ProvidersStrategy;
  dead_letter_arn?: string;
  environment?: Array<JwtClass | string> | JwtClass | string;
  function_name?: string;
  function_tags?: Array<JwtClass | string> | JwtClass | string;
  handler_name?: string;
  kms_key_arn?: string;
  layers?: string[] | string;
  memory_size?: string;
  module_name?: string;
  role?: string;
  runtime?: string;
  security_group_ids?: string[] | string;
  subnet_ids?: string[] | string;
  timeout?: number | string;
  tracing_mode?: TracingMode;
  zip?: string;
  oauth_token?: JwtClass | string;
  oauth_token_secret?: JwtClass | string;
  slug?: string;
  auth?: JwtClass | string;
  functions?: string;
  prod?: boolean;
  access?: Access;
  api_token?: JwtClass | string;
  auth_method?: string;
  registry?: string;
  src?: string;
  tag?: string;
  server?: string;
  app_id?: string;
  custom_json?: string;
  instance_ids?: string[] | string;
  layer_ids?: string[] | string;
  update_on_success?: boolean;
  connect_timeout?: number;
  dist?: string;
  package_glob?: string[] | string;
  read_timeout?: number;
  write_timeout?: number;
  committer_from_gh?: boolean;
  deployment_file?: boolean;
  fqdn?: string;
  keep_history?: boolean;
  project_name?: string;
  target_branch?: string;
  distributions?: string;
  docs_dir?: string;
  remove_build_dir?: boolean;
  setuptools_version?: string;
  skip_existing?: boolean;
  skip_upload_docs?: boolean;
  twine_check?: boolean;
  twine_version?: string;
  upload_docs?: boolean;
  wheel_version?: string;
  draft?: boolean;
  file_glob?: boolean;
  overwrite?: boolean;
  prerelease?: boolean;
  release_notes?: string;
  release_notes_file?: string;
  release_number?: string;
  tag_name?: string;
  target_commitish?: string;
  gem?: { [key: string]: string } | string;
  gemspec?: string;
  gemspec_glob?: string;
  default_text_charset?: string;
  expires?: string[] | string;
  force_path_style?: boolean;
  index_document_suffix?: string;
  max_threads?: number;
  server_side_encryption?: boolean;
  storage_class?: string;
  remote?: string;
  script?: string;
  channel?: string;
  snap?: string;
  domain?: string;
  login?: JwtClass | string;
  advanced_options?: string;
  app_file?: string;
  auto_update?: boolean;
  notify?: boolean;
  symbols_file?: string;
  testers_groups?: string;
  hostname?: string;
}

export interface HomebrewClass {
  brewfile?: boolean | string;
  casks?: string[] | string;
  packages?: string[] | string;
  taps?: string[] | string;
  update?: boolean;
}

export interface PkgClass {
  branch?: string;
  packages?: string[] | string;
}

export interface SauceConnectClass {
  access_key?: JwtClass | string;
  direct_domains?: string;
  enabled?: boolean;
  no_ssl_bump_domains?: string;
  tunnel_domains?: string;
  username?: JwtClass | string;
}

export interface SnapClass {
  channel?: string;
  classic?: boolean;
  name?: string;
}

export interface SnapsClass {
  channel?: string;
  classic?: boolean;
  name?: string;
}

export interface SonarcloudClass {
  branches?: string[] | string;
  enabled?: boolean;
  github_token?: JwtClass | string;
  organization?: string;
  token?: JwtClass | string;
}

export interface TravisAndroid {
  components?: string[] | string;
  licenses?: string[] | string;
}

/**
 * The architecture that will be selected for the build environment.
 */
export enum Architecture {
  Amd64 = "amd64",
  Arm64 = "arm64",
  Arm64Graviton2 = "arm64-graviton2",
  I386 = "i386",
  Ppc64LE = "ppc64le",
  S390X = "s390x",
}

export interface Branches {
  except?: string[] | string;
  only?: string[] | string;
}

export interface CacheClass {
  apt?: boolean;
  branch?: string;
  bundler?: boolean;
  cargo?: boolean;
  ccache?: boolean;
  cocoapods?: boolean;
  directories?: string[] | string;
  edge?: boolean;
  npm?: boolean;
  packages?: boolean;
  pip?: boolean;
  timeout?: number;
  yarn?: boolean;
}

export enum ConditionsEnum {
  V0 = "v0",
  V1 = "v1",
}

export interface PurpleDartTask {
  dartanalyzer?: string;
  dartfmt?: boolean;
  install_dartium?: boolean;
  test?: string;
  xvfb?: boolean;
}

export interface FluffyDartTask {
  dartanalyzer?: string;
  dartfmt?: boolean;
  install_dartium?: boolean;
  test?: string;
  xvfb?: boolean;
}

export enum Distribution {
  Bionic = "bionic",
  Focal = "focal",
  Precise = "precise",
  Server2016 = "server-2016",
  Trusty = "trusty",
  Xenial = "xenial",
}

export interface EnvVarObject {
  secure?: string;
}

export interface EnvObject {
  global?: Array<EnvVarObject | string> | EnvVarsObject | string;
  jobs?: Array<EnvVarObject | string> | EnvVarsObject | string;
  secure?: string;
}

export interface EnvVarsObject {
  secure?: string;
}

export interface TravisGimmeConfig {
  force_reinstall?: boolean;
  url?: string;
}

/**
 * These settings can be used in order to customize how the repository
 * is cloned with Git.
 */
export interface Git {
  autocrlf?: boolean | AutocrlfEnum;
  depth?: boolean | number;
  lfs_skip_smudge?: boolean;
  quiet?: boolean;
  sparse_checkout?: string;
  strategy?: GitStrategy;
  submodules?: boolean;
  submodules_depth?: number;
  symlinks?: boolean;
}

export enum AutocrlfEnum {
  Input = "input",
}

export enum GitStrategy {
  Clone = "clone",
  Tarball = "tarball",
}

export interface ImportsClass {
  if?: string;
  mode?: Mode;
  source?: string;
}

export enum Mode {
  DeepMerge = "deep_merge",
  DeepMergeAppend = "deep_merge_append",
  DeepMergePrepend = "deep_merge_prepend",
  Merge = "merge",
}

export interface JobMatrixIncludesElement {
  allow_failure?: boolean;
  arch?: Architecture;
  branches?: string[] | Branches | string;
  compiler?: string;
  dist?: Distribution;
  env?: Array<EnvVarObject | string> | EnvVarsObject | string;
  language?: Language;
  name?: string;
  os?: OS;
  osx_image?: string;
  stage?: string;
  sudo?: boolean | string;
  android?: JobMatrixIncludesAndroid;
  jdk?: string;
  lein?: string;
  crystal?: string;
  dotnet?: string;
  mono?: string;
  solution?: string;
  d?: string;
  dart?: string;
  dart_task?: JobMatrixIncludesDartTask;
  with_content_shell?: boolean;
  elixir?: string;
  otp_release?: string;
  elm?: string;
  elm_format?: string;
  elm_test?: string;
  node_js?: string;
  gimme_config?: JobMatrixIncludesGimmeConfig;
  go?: string;
  go_import_path?: string;
  gobuild_args?: string;
  hhvm?: string;
  php?: string;
  ghc?: string;
  haxe?: string;
  hxml?: string[] | string;
  neko?: string;
  julia?: string;
  matlab?: string;
  nix?: string;
  npm_args?: string;
  perl?: string;
  perl6?: string;
  composer_args?: string;
  python?: string;
  virtualenv?: JobMatrixIncludesVirtualenv;
  apt_packages?: string[] | string;
  bioc?: string;
  bioc_check?: boolean;
  bioc_packages?: string[] | string;
  bioc_required?: boolean;
  bioc_use_devel?: boolean;
  brew_packages?: string[] | string;
  cran?: string;
  disable_homebrew?: boolean;
  latex?: boolean;
  pandoc?: boolean;
  pandoc_version?: string;
  r?: string;
  r_binary_packages?: string[] | string;
  r_build_args?: string;
  r_check_args?: string;
  r_check_revdep?: boolean;
  r_github_packages?: string[] | string;
  r_packages?: string[] | string;
  remotes?: string;
  repos?: { [key: string]: any };
  warnings_are_errors?: boolean;
  bundler_args?: string;
  gemfile?: string;
  rvm?: string;
  podfile?: string;
  xcode_destination?: string;
  xcode_project?: string;
  xcode_scheme?: string;
  xcode_sdk?: string;
  xcode_workspace?: string;
  xctool_args?: string;
  rust?: string;
  sbt_args?: string;
  scala?: string;
  smalltalk?: string;
  smalltalk_config?: string[] | string;
  smalltalk_edge?: JobMatrixIncludesSmalltalkEdge;
  smalltalk_vm?: string[] | string;
  addons?: Addons;
  after_deploy?: string[] | string;
  after_failure?: string[] | string;
  after_script?: string[] | string;
  after_success?: string[] | string;
  before_cache?: string[] | string;
  before_deploy?: string[] | string;
  before_install?: string[] | string;
  before_script?: string[] | string;
  cache?: boolean | CacheClass;
  deploy?:
    | Array<ProvidersClass | DeploymentsEnum>
    | DeploymentsClass
    | DeploymentsEnum;
  git?: Git;
  group?: string;
  if?: string;
  install?: string[] | string;
  script?: string[] | string;
  services?: Service[] | Service;
  virt?: Virtualization;
}

export interface JobMatrixIncludesAndroid {
  components?: string[] | string;
  licenses?: string[] | string;
}

export interface JobMatrixIncludesDartTask {
  dartanalyzer?: string;
  dartfmt?: boolean;
  install_dartium?: boolean;
  test?: string;
  xvfb?: boolean;
}

export interface JobMatrixIncludesGimmeConfig {
  force_reinstall?: boolean;
  url?: string;
}

/**
 * The key `language` selects the language support used for the build.
 *
 * Language supports define additional root level keys, e.g. for selecting
 * the language runtime version. Some of these keys will expand additional
 * jobs in the build matrix, such as the key `python` on Python language
 * support.
 */
export enum Language {
  Amethyst = "__amethyst__",
  Android = "android",
  C = "c",
  Clojure = "clojure",
  Connie = "__connie__",
  Cookiecat = "__cookiecat__",
  Cpp = "cpp",
  Crystal = "crystal",
  Csharp = "csharp",
  D = "d",
  Dart = "dart",
  Elixir = "elixir",
  Elm = "elm",
  Erlang = "erlang",
  Garnet = "__garnet__",
  Generic = "generic",
  Go = "go",
  Groovy = "groovy",
  Hack = "hack",
  Haskell = "haskell",
  Haxe = "haxe",
  Java = "java",
  Julia = "julia",
  Matlab = "matlab",
  Nix = "nix",
  NodeJS = "node_js",
  ObjectiveC = "objective-c",
  Onion = "__onion__",
  Opal = "__opal__",
  PERL = "perl",
  PHP = "php",
  Perl6 = "perl6",
  Python = "python",
  R = "r",
  Ruby = "ruby",
  Rust = "rust",
  Sardonyx = "__sardonyx__",
  Scala = "scala",
  Shell = "shell",
  Smalltalk = "smalltalk",
  Stevonnie = "__stevonnie__",
}

export enum Service {
  Cassandra = "cassandra",
  Couchdb = "couchdb",
  Docker = "docker",
  Elasticsearch = "elasticsearch",
  Memcached = "memcached",
  Mongodb = "mongodb",
  Mysql = "mysql",
  Neo4J = "neo4j",
  Postgresql = "postgresql",
  Rabbitmq = "rabbitmq",
  Redis = "redis",
  Riak = "riak",
  Xvfb = "xvfb",
}

export interface JobMatrixIncludesSmalltalkEdge {
  branch?: string;
  source?: string;
}

export enum Virtualization {
  Lxd = "lxd",
  VM = "vm",
}

export interface JobMatrixIncludesVirtualenv {
  system_site_packages?: boolean;
}

export interface PurpleJobMatrixIncludes {
  allow_failures?: JobMatrixAllowFailure[] | JobMatrixAllowFailure;
  exclude?: JobMatrixExclude[] | JobMatrixExclude;
  fast_finish?: boolean;
  include?: JobMatrixIncludesElement[] | JobMatrixIncludesElement;
  allow_failure?: boolean;
  arch?: Architecture;
  branches?: string[] | Branches | string;
  compiler?: string;
  dist?: Distribution;
  env?: Array<EnvVarObject | string> | EnvVarsObject | string;
  language?: Language;
  name?: string;
  os?: OS;
  osx_image?: string;
  stage?: string;
  sudo?: boolean | string;
  android?: JobMatrixIncludesAndroid;
  jdk?: string;
  lein?: string;
  crystal?: string;
  dotnet?: string;
  mono?: string;
  solution?: string;
  d?: string;
  dart?: string;
  dart_task?: JobMatrixIncludesDartTask;
  with_content_shell?: boolean;
  elixir?: string;
  otp_release?: string;
  elm?: string;
  elm_format?: string;
  elm_test?: string;
  node_js?: string;
  gimme_config?: JobMatrixIncludesGimmeConfig;
  go?: string;
  go_import_path?: string;
  gobuild_args?: string;
  hhvm?: string;
  php?: string;
  ghc?: string;
  haxe?: string;
  hxml?: string[] | string;
  neko?: string;
  julia?: string;
  matlab?: string;
  nix?: string;
  npm_args?: string;
  perl?: string;
  perl6?: string;
  composer_args?: string;
  python?: string;
  virtualenv?: JobMatrixIncludesVirtualenv;
  apt_packages?: string[] | string;
  bioc?: string;
  bioc_check?: boolean;
  bioc_packages?: string[] | string;
  bioc_required?: boolean;
  bioc_use_devel?: boolean;
  brew_packages?: string[] | string;
  cran?: string;
  disable_homebrew?: boolean;
  latex?: boolean;
  pandoc?: boolean;
  pandoc_version?: string;
  r?: string;
  r_binary_packages?: string[] | string;
  r_build_args?: string;
  r_check_args?: string;
  r_check_revdep?: boolean;
  r_github_packages?: string[] | string;
  r_packages?: string[] | string;
  remotes?: string;
  repos?: { [key: string]: any };
  warnings_are_errors?: boolean;
  bundler_args?: string;
  gemfile?: string;
  rvm?: string;
  podfile?: string;
  xcode_destination?: string;
  xcode_project?: string;
  xcode_scheme?: string;
  xcode_sdk?: string;
  xcode_workspace?: string;
  xctool_args?: string;
  rust?: string;
  sbt_args?: string;
  scala?: string;
  smalltalk?: string;
  smalltalk_config?: string[] | string;
  smalltalk_edge?: JobMatrixIncludesSmalltalkEdge;
  smalltalk_vm?: string[] | string;
  addons?: Addons;
  after_deploy?: string[] | string;
  after_failure?: string[] | string;
  after_script?: string[] | string;
  after_success?: string[] | string;
  before_cache?: string[] | string;
  before_deploy?: string[] | string;
  before_install?: string[] | string;
  before_script?: string[] | string;
  cache?: boolean | CacheClass;
  deploy?:
    | Array<ProvidersClass | DeploymentsEnum>
    | DeploymentsClass
    | DeploymentsEnum;
  git?: Git;
  group?: string;
  if?: string;
  install?: string[] | string;
  script?: string[] | string;
  services?: Service[] | Service;
  virt?: Virtualization;
}

export interface JobMatrixAllowFailure {
  arch?: Architecture;
  branch?: string;
  branches?: string[] | Branches | string;
  compiler?: string;
  dist?: Distribution;
  env?: Array<EnvVarObject | string> | EnvVarsObject | string;
  language?: Language;
  name?: string;
  os?: OS;
  osx_image?: string;
  stage?: string;
  sudo?: boolean | string;
  android?: JobMatrixIncludesAndroid;
  jdk?: string;
  lein?: string;
  crystal?: string;
  dotnet?: string;
  mono?: string;
  solution?: string;
  d?: string;
  dart?: string;
  dart_task?: JobMatrixIncludesDartTask;
  with_content_shell?: boolean;
  elixir?: string;
  otp_release?: string;
  elm?: string;
  elm_format?: string;
  elm_test?: string;
  node_js?: string;
  gimme_config?: JobMatrixIncludesGimmeConfig;
  go?: string;
  go_import_path?: string;
  gobuild_args?: string;
  hhvm?: string;
  php?: string;
  ghc?: string;
  haxe?: string;
  hxml?: string[] | string;
  neko?: string;
  julia?: string;
  matlab?: string;
  nix?: string;
  npm_args?: string;
  perl?: string;
  perl6?: string;
  composer_args?: string;
  python?: string;
  virtualenv?: JobMatrixIncludesVirtualenv;
  apt_packages?: string[] | string;
  bioc?: string;
  bioc_check?: boolean;
  bioc_packages?: string[] | string;
  bioc_required?: boolean;
  bioc_use_devel?: boolean;
  brew_packages?: string[] | string;
  cran?: string;
  disable_homebrew?: boolean;
  latex?: boolean;
  pandoc?: boolean;
  pandoc_version?: string;
  r?: string;
  r_binary_packages?: string[] | string;
  r_build_args?: string;
  r_check_args?: string;
  r_check_revdep?: boolean;
  r_github_packages?: string[] | string;
  r_packages?: string[] | string;
  remotes?: string;
  repos?: { [key: string]: any };
  warnings_are_errors?: boolean;
  bundler_args?: string;
  gemfile?: string;
  rvm?: string;
  podfile?: string;
  xcode_destination?: string;
  xcode_project?: string;
  xcode_scheme?: string;
  xcode_sdk?: string;
  xcode_workspace?: string;
  xctool_args?: string;
  rust?: string;
  sbt_args?: string;
  scala?: string;
  smalltalk?: string;
  smalltalk_config?: string[] | string;
  smalltalk_edge?: JobMatrixIncludesSmalltalkEdge;
  smalltalk_vm?: string[] | string;
  addons?: Addons;
  after_deploy?: string[] | string;
  after_failure?: string[] | string;
  after_script?: string[] | string;
  after_success?: string[] | string;
  before_cache?: string[] | string;
  before_deploy?: string[] | string;
  before_install?: string[] | string;
  before_script?: string[] | string;
  cache?: boolean | CacheClass;
  deploy?:
    | Array<ProvidersClass | DeploymentsEnum>
    | DeploymentsClass
    | DeploymentsEnum;
  git?: Git;
  group?: string;
  if?: string;
  install?: string[] | string;
  script?: string[] | string;
  services?: Service[] | Service;
  virt?: Virtualization;
}

export interface JobMatrixExclude {
  arch?: Architecture;
  branches?: string[] | Branches | string;
  compiler?: string;
  dist?: Distribution;
  env?: Array<EnvVarObject | string> | EnvVarsObject | string;
  language?: Language;
  name?: string;
  os?: OS;
  osx_image?: string;
  stage?: string;
  sudo?: boolean | string;
  android?: JobMatrixIncludesAndroid;
  jdk?: string;
  lein?: string;
  crystal?: string;
  dotnet?: string;
  mono?: string;
  solution?: string;
  d?: string;
  dart?: string;
  dart_task?: JobMatrixIncludesDartTask;
  with_content_shell?: boolean;
  elixir?: string;
  otp_release?: string;
  elm?: string;
  elm_format?: string;
  elm_test?: string;
  node_js?: string;
  gimme_config?: JobMatrixIncludesGimmeConfig;
  go?: string;
  go_import_path?: string;
  gobuild_args?: string;
  hhvm?: string;
  php?: string;
  ghc?: string;
  haxe?: string;
  hxml?: string[] | string;
  neko?: string;
  julia?: string;
  matlab?: string;
  nix?: string;
  npm_args?: string;
  perl?: string;
  perl6?: string;
  composer_args?: string;
  python?: string;
  virtualenv?: JobMatrixIncludesVirtualenv;
  apt_packages?: string[] | string;
  bioc?: string;
  bioc_check?: boolean;
  bioc_packages?: string[] | string;
  bioc_required?: boolean;
  bioc_use_devel?: boolean;
  brew_packages?: string[] | string;
  cran?: string;
  disable_homebrew?: boolean;
  latex?: boolean;
  pandoc?: boolean;
  pandoc_version?: string;
  r?: string;
  r_binary_packages?: string[] | string;
  r_build_args?: string;
  r_check_args?: string;
  r_check_revdep?: boolean;
  r_github_packages?: string[] | string;
  r_packages?: string[] | string;
  remotes?: string;
  repos?: { [key: string]: any };
  warnings_are_errors?: boolean;
  bundler_args?: string;
  gemfile?: string;
  rvm?: string;
  podfile?: string;
  xcode_destination?: string;
  xcode_project?: string;
  xcode_scheme?: string;
  xcode_sdk?: string;
  xcode_workspace?: string;
  xctool_args?: string;
  rust?: string;
  sbt_args?: string;
  scala?: string;
  smalltalk?: string;
  smalltalk_config?: string[] | string;
  smalltalk_edge?: JobMatrixIncludesSmalltalkEdge;
  smalltalk_vm?: string[] | string;
  addons?: Addons;
  after_deploy?: string[] | string;
  after_failure?: string[] | string;
  after_script?: string[] | string;
  after_success?: string[] | string;
  before_cache?: string[] | string;
  before_deploy?: string[] | string;
  before_install?: string[] | string;
  before_script?: string[] | string;
  cache?: boolean | CacheClass;
  deploy?:
    | Array<ProvidersClass | DeploymentsEnum>
    | DeploymentsClass
    | DeploymentsEnum;
  git?: Git;
  group?: string;
  if?: string;
  install?: string[] | string;
  script?: string[] | string;
  services?: Service[] | Service;
  virt?: Virtualization;
}

export interface NotificationClass {
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_success?: Frequency;
  recipients?: Array<JwtClass | string> | JwtClass | string;
  secure?: string;
}

export enum Frequency {
  Always = "always",
  Change = "change",
  Never = "never",
}

export interface NotificationsClass {
  campfire?:
    | Array<Array<JwtClass | string> | boolean | PurpleCampfire | string>
    | boolean
    | FluffyCampfire
    | string;
  email?:
    | Array<Array<JwtClass | string> | boolean | NotificationClass | string>
    | boolean
    | PurpleEmail
    | string;
  flowdock?:
    | Array<boolean | FlowdockClass | string>
    | boolean
    | FlowdockFlowdock
    | string;
  hipchat?:
    | Array<Array<JwtClass | string> | boolean | PurpleHipchat | string>
    | boolean
    | FluffyHipchat
    | string;
  irc?:
    | Array<Array<JwtClass | string> | boolean | PurpleIRC | string>
    | boolean
    | FluffyIRC
    | string;
  on_failure?: Frequency;
  on_success?: Frequency;
  pushover?: Array<boolean | PushoverClass> | boolean | PushoverClass;
  slack?:
    | Array<Array<JwtClass | string> | boolean | PurpleSlack | string>
    | boolean
    | FluffySlack
    | string;
  webhooks?:
    | Array<Array<JwtClass | string> | boolean | WebhookClass | string>
    | boolean
    | WebhooksClass
    | string;
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  recipients?: Array<JwtClass | string> | JwtClass | string;
  secure?: string;
}

export interface PurpleCampfire {
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_success?: Frequency;
  rooms?: Array<JwtClass | string> | JwtClass | string;
  template?: string[] | string;
  secure?: string;
}

export interface FluffyCampfire {
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_success?: Frequency;
  rooms?: Array<JwtClass | string> | JwtClass | string;
  template?: string[] | string;
  secure?: string;
}

export interface PurpleEmail {
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_success?: Frequency;
  recipients?: Array<JwtClass | string> | JwtClass | string;
  secure?: string;
}

export interface FlowdockClass {
  api_token?: JwtClass | string;
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_success?: Frequency;
  template?: string[] | string;
  secure?: string;
}

export interface FlowdockFlowdock {
  api_token?: JwtClass | string;
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_success?: Frequency;
  template?: string[] | string;
  secure?: string;
}

export interface PurpleHipchat {
  disabled?: boolean;
  enabled?: boolean;
  format?: Format;
  if?: string;
  notify?: boolean;
  on_failure?: Frequency;
  on_pull_requests?: boolean;
  on_success?: Frequency;
  rooms?: Array<JwtClass | string> | JwtClass | string;
  template?: string[] | string;
  secure?: string;
}

export enum Format {
  HTML = "html",
  Text = "text",
}

export interface FluffyHipchat {
  disabled?: boolean;
  enabled?: boolean;
  format?: Format;
  if?: string;
  notify?: boolean;
  on_failure?: Frequency;
  on_pull_requests?: boolean;
  on_success?: Frequency;
  rooms?: Array<JwtClass | string> | JwtClass | string;
  template?: string[] | string;
  secure?: string;
}

export interface PurpleIRC {
  channel_key?: JwtClass | string;
  channels?: Array<JwtClass | string> | JwtClass | string;
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  nick?: JwtClass | string;
  nickserv_password?: JwtClass | string;
  on_failure?: Frequency;
  on_success?: Frequency;
  password?: JwtClass | string;
  skip_join?: boolean;
  template?: string[] | string;
  use_notice?: boolean;
  secure?: string;
}

export interface FluffyIRC {
  channel_key?: JwtClass | string;
  channels?: Array<JwtClass | string> | JwtClass | string;
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  nick?: JwtClass | string;
  nickserv_password?: JwtClass | string;
  on_failure?: Frequency;
  on_success?: Frequency;
  password?: JwtClass | string;
  skip_join?: boolean;
  template?: string[] | string;
  use_notice?: boolean;
  secure?: string;
}

export interface PushoverClass {
  api_key?: Array<JwtClass | string> | JwtClass | string;
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_success?: Frequency;
  template?: string[] | string;
  users?: Array<JwtClass | string> | JwtClass | string;
}

export interface PurpleSlack {
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_pull_requests?: boolean;
  on_success?: Frequency;
  rooms?: Array<JwtClass | string> | JwtClass | string;
  template?: string[] | string;
  secure?: string;
}

export interface FluffySlack {
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_failure?: Frequency;
  on_pull_requests?: boolean;
  on_success?: Frequency;
  rooms?: Array<JwtClass | string> | JwtClass | string;
  template?: string[] | string;
  secure?: string;
}

export interface WebhookClass {
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_cancel?: Frequency;
  on_error?: Frequency;
  on_failure?: Frequency;
  on_start?: Frequency;
  on_success?: Frequency;
  urls?: Array<JwtClass | string> | JwtClass | string;
  secure?: string;
}

export interface WebhooksClass {
  disabled?: boolean;
  enabled?: boolean;
  if?: string;
  on_cancel?: Frequency;
  on_error?: Frequency;
  on_failure?: Frequency;
  on_start?: Frequency;
  on_success?: Frequency;
  urls?: Array<JwtClass | string> | JwtClass | string;
  secure?: string;
}

export interface TravisSmalltalkEdge {
  branch?: string;
  source?: string;
}

export enum Stack {
  Amethyst = "amethyst",
  Connie = "connie",
  Cookiecat = "cookiecat",
  Garnet = "garnet",
  Onion = "onion",
  Opal = "opal",
  Sardonyx = "sardonyx",
  Stevonnie = "stevonnie",
}

export interface StagesClass {
  if?: string;
  name?: string;
}

export interface TravisVirtualenv {
  system_site_packages?: boolean;
}
