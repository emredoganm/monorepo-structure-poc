import { danger, fail } from "danger";
import { structuredFileAddedLineMatches } from "danger-plugin-toolbox";

const TestDataIDs = async (git, failer) => {
  const wrongAttributeRegExp =
    /data-testId|data-testID|datatestid|data-test-id|data-test-Id|data-test-ID|data-qa|data-QA/;
  const filesWithWrongDataTestId: string[] = [];

  await Promise.all(
    git.created_files.map(async (file) => {
      const dataTestIDs = await structuredFileAddedLineMatches(
        file,
        wrongAttributeRegExp
      );

      if (dataTestIDs.length > 0) {
        filesWithWrongDataTestId.push(file);
      }
    })
  );

  filesWithWrongDataTestId.forEach((file) => {
    failer(
      `Wrong "data-testid" attribute found in file ${file}   - 
      <i>Make sure you use "data-testid" attribute</i>`
    );
  });
};

TestDataIDs(danger.git, fail);
