# gtran
Google translate in CLI! 구글 번역을 터미널에서 실행해 보세요!

# 사용법
```bash
gtran-{os명}-{아키텍처 종류} --source {원문 언어값} --target {번역할 언어값} --text {번역할 텍스트}

# 예: 윈도우(x64)
gtran-win-x64.exe --text "Tu es incroyable!" --source "fr" --target "en"

# 예: 윈도우(arm64)
gtran-win-arm64.exe --text "Tu es incroyable!" --source "fr" --target "en"

# 예: 리눅스(x64)
./gtran-linux-x64 --text "Tu es incroyable!" --source "fr" --target "en"

# 예: 리눅스(arm64)
./gtran-linux-arm64 --text "Tu es incroyable!" --source "fr" --target "en"

# 예: 맥os(x64)
./gtran-macos-x64 --text "Tu es incroyable!" --source "fr" --target "en"

# 예: 맥os(arm64)
./gtran-macos-arm64 --text "Tu es incroyable!" --source "fr" --target "en"
```

* `source` 파라미터 생략 시 `auto`(자동 인식)으로 간주, `target` 파라미터 생략 시, `en`으로 간주
* `text` 파라미터는 필수로 존재해야 함.
* `source`, `target` 값은 ISO 639-1 코드값으로 입력해야 함.

자세한 내용은 [@iamtraction/google-translate](https://github.com/iamtraction/google-translate) 저장소를 확인하세요!

# 빌드
다음 명령어로 직접 빌드 할 수 있습니다. 빌드하면 dist 폴더 안에 파일이 생성됩니다.

```bash
pkg .
```

그 전에 `pkg` 라이브러리를 전역 설치해야 합니다.

```bash
npm install -g pkg
```

# 사용한 라이브러리
* [@iamtraction/google-translate](https://github.com/iamtraction/google-translate) - 구글 번역 수행
* [pkg](https://www.npmjs.com/package/pkg) - 패키지 파일로 빌드