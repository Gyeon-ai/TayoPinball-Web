# 타요 핀볼

구슬을 물리 엔진으로 굴려 당첨자를 뽑는 독립 실행형 웹 추첨기입니다. 원본
[Marble Roulette](https://github.com/lazygyu/roulette)를 기반으로 하며, 별도의 광고·분석 코드 없이 동작하도록 정리했습니다.

## 주요 기능

- 쉼표 또는 줄바꿈으로 참가자 입력
- `이름*3` 형식으로 같은 참가자의 구슬 수 지정
- `이름/3` 형식으로 구슬 무게 지정
- 여러 핀볼 맵과 첫 번째·마지막·지정 순위 당첨 방식
- 이름별로 고정 배정되는 타요 퍼스나콘 구슬 스킨
- 경기 중 즉시 적용되는 1x·2x·5x 배속과 중앙 누르기 임시 배속
- 당첨자 확정 후 직접 시작하는 카운트다운 타이머
- `?names=게임1,게임2` URL 매개변수로 명단 자동 입력
- 브라우저 로컬 저장 및 배포 시 최신 버전 자동 반영

기본 참가자는 `타요,종겜,핀볼`입니다.

## 실행과 빌드

Node.js 24와 pnpm 11.19.0을 권장합니다.

```powershell
pnpm install
pnpm dev
```

개발 서버는 기본적으로 `http://localhost:1235`에서 열립니다. 정적 배포 파일은 다음 명령으로 `dist` 폴더에 생성합니다.

```powershell
pnpm build
```

오프라인 실행은 지원하지 않습니다. 과거 버전의 서비스 워커가 남은 브라우저에서는 배포된 제거 스크립트가 타요 핀볼 캐시만 정리한 뒤 등록을 해제합니다.

## 수집기 연결

Windows 수집기의 `PinballUrl`에 `https://gyeon-ai.github.io/TayoPinball-Web/`를 설정하면 기존 `?names=` 명단 전달 기능을 사용할 수 있습니다.

## 이미지와 라이선스

핀볼 엔진은 [Marble Roulette](https://github.com/lazygyu/roulette)를 기반으로 하며 소스코드는 [MIT License](LICENSE)를 따릅니다. `Marble Roulette`와 `마블 룰렛` 명칭은 원본 프로젝트를 식별하기 위해서만 사용합니다.

타요 아이콘과 퍼스나콘은 MIT License 적용 대상이 아니며 각 이미지의 권리는 해당 권리자에게 있습니다. 제3자 구성요소와 이미지 사용 범위는 [NOTICE.md](NOTICE.md)를 확인하세요.
