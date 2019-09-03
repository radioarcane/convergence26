
function getSubmitBtnHtml() {
   return `
      <div class="grid">
         <div class="grid__item xs-12 text-center">
            <button type="submit">
               Submit Form
            </button>
         </div>
      </div>
   `;
}

function getDjSectionHtml() {
   return `
   <div id="submission-form__djs">
      <fieldset>
         <div class="grid">
            <div class="grid__item xs-12">
               <h3>DJ Info:</h3>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="name">
                  <span class="required-label">DJ Name:</span>
                  <input type="text" id="name" name="name" maxlength="100" required>
               </label>
            </div>
            <div class="grid__item xs-12 lg-6">
               <label for="participated_past_convergence">
                  <span class="required-label">Have you participated in past Convergence(s)?</span>
                  <select id="participated_past_convergence" name="participated_past_convergence" required>
                     <option value="">Select...</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>
            </div>
            <div class="grid__item xs-12">
               <label for="past_convergence" style="display: none;">
                  <span>Which Convergence(s) did you participate in?</span>
                  <textarea id="past_convergence" name="past_convergence" maxlength="1000"></textarea>
               </label>
            </div>
            <div class="grid__item xs-12">
               <label for="event_nights">
                  <span class="required-label">Event nights you are associated with:</span>
                  <textarea id="event_nights" name="event_nights" maxlength="2000" required></textarea>
               </label>
            </div>
            <div class="grid__item xs-12">
               <label for="bio">
                  <span class="required-label">Your Bio:</span>
                  <textarea id="bio" name="bio" maxlength="10000" required></textarea>
               </label>
            </div>
         </div>
      </fieldset>
      <fieldset>
         <div class="grid">
            <div class="grid__item xs-12">
               <h3>Please provide any relevant links:</h3>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="website">
                  <span>Website:</span>
                  <input type="text" name="website" id="website" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6"></div>
            <div class="grid__item xs-12 md-6">
               <label for="facebook">
                  <span>Facebook:</span>
                  <input type="text" name="facebook" id="facebook" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="instagram">
                  <span>Instagram:</span>
                  <input type="text" name="instagram" id="instagram" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="bandcamp">
                  <span>Bandcamp:</span>
                  <input type="text" name="bandcamp" id="bandcamp" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="soundcloud">
                  <span>Soundcloud:</span>
                  <input type="text" name="soundcloud" id="soundcloud" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="mixcloud">
                  <span>Mixcloud:</span>
                  <input type="text" name="mixcloud" id="mixcloud" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="youtube">
                  <span>YouTube:</span>
                  <input type="text" name="youtube" id="youtube" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="other_link">
                  <span>Other:</span>
                  <input type="text" name="other_link" id="other_link" maxlength="150">
               </label>
            </div>
         </div>
      </fieldset>
   </div>
   `;
}

function getBandSectionHtml() {
   return `
   <div id="submission-form__bands">
      <fieldset>
         <div class="grid">
            <div class="grid__item xs-12">
               <h3>Band Info:</h3>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="name">
                  <span class="required-label">Band Name:</span>
                  <input type="text" id="name" name="name" maxlength="100" required>
               </label>
            </div>
            <div class="grid__item xs-12 lg-6">
               <label for="participated_past_convergence">
                  <span class="required-label">Have you participated in past Convergence(s)?</span>
                  <select id="participated_past_convergence" name="participated_past_convergence" required>
                     <option value="">Select...</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>
            </div>
            <div class="grid__item xs-12">
               <label for="past_convergence" style="display: none;">
                  <span>Which Convergence(s) did you participate in?</span>
                  <textarea id="past_convergence" name="past_convergence" maxlength="1000"></textarea>
               </label>
            </div>
            <div class="grid__item xs-12">
               <label for="recent_shows">
                  <span class="required-label">List of your most recent shows:</span>
                  <textarea id="recent_shows" name="recent_shows" maxlength="2000" required></textarea>
               </label>
            </div>
            <div class="grid__item xs-12">
               <label for="bio">
                  <span class="required-label">Your Bio:</span>
                  <textarea id="bio" name="bio" maxlength="10000" required></textarea>
               </label>
            </div>
         </div>
      </fieldset>
      <fieldset>
         <div class="grid">
            <div class="grid__item xs-12">
               <h3>Please provide any relevant links:</h3>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="website">
                  <span>Website:</span>
                  <input type="text" name="website" id="website" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6"></div>
            <div class="grid__item xs-12 md-6">
               <label for="facebook">
                  <span>Facebook:</span>
                  <input type="text" name="facebook" id="facebook" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="instagram">
                  <span>Instagram:</span>
                  <input type="text" name="instagram" id="instagram" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="bandcamp">
                  <span>Bandcamp:</span>
                  <input type="text" name="bandcamp" id="bandcamp" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="soundcloud">
                  <span>Soundcloud:</span>
                  <input type="text" name="soundcloud" id="soundcloud" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="youtube">
                  <span>YouTube:</span>
                  <input type="text" name="youtube" id="youtube" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="other_link">
                  <span>Other:</span>
                  <input type="text" name="other_link" id="other_link" maxlength="150">
               </label>
            </div>
         </div>
      </fieldset>
   </div>
   `;
}

function getTalentSectionHtml() {
   return `
   <div id="submission-form__talent">
      <fieldset>
         <div class="grid">
            <div class="grid__item xs-12">
               <h3>Talent Info:</h3>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="name">
                  <span class="required-label">Stage Name:</span>
                  <input type="text" id="name" name="name" maxlength="100" required>
               </label>
            </div>
            <div class="grid__item xs-12 lg-6">
               <label for="participated_past_convergence">
                  <span class="required-label">Have you participated in past Convergence(s)?</span>
                  <select id="participated_past_convergence" name="participated_past_convergence" required>
                     <option value="">Select...</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>
            </div>
            <div class="grid__item xs-12">
               <label for="past_convergence" style="display: none;">
                  <span>Which Convergence(s) did you participate in?</span>
                  <textarea id="past_convergence" name="past_convergence" maxlength="1000"></textarea>
               </label>
            </div>
            <div class="grid__item xs-12">
               <label for="bio">
                  <span class="required-label">Your Bio:</span>
                  <textarea id="bio" name="bio" maxlength="10000" required></textarea>
               </label>
            </div>
         </div>
      </fieldset>
      <fieldset>
         <div class="grid">
            <div class="grid__item xs-12">
               <h3>Please provide any relevant links:</h3>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="website">
                  <span>Website:</span>
                  <input type="text" name="website" id="website" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6"></div>
            <div class="grid__item xs-12 md-6">
               <label for="facebook">
                  <span>Facebook:</span>
                  <input type="text" name="facebook" id="facebook" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="instagram">
                  <span>Instagram:</span>
                  <input type="text" name="instagram" id="instagram" maxlength="150">
               </label>
            </div>
            <div class="grid__item xs-12 md-6">
               <label for="other_link">
                  <span>Other:</span>
                  <input type="text" name="other_link" id="other_link" maxlength="150">
               </label>
            </div>
         </div>
      </fieldset>
   </div>
   `;
}

function setupPastConvergenceQuestion(node) {
   const question = node.querySelector('#participated_past_convergence');
   const nextLabel = node.querySelector('label[for="past_convergence"]');

   question.addEventListener('change', ev => {
      const val = ev.target.value;
      nextLabel.style.display = val === 'Yes' ? 'block' : 'none';
   });
}

function setupForm(node) {
   const submissionType = node.querySelector('#submission_type');
   const container = node.querySelector('#submission-form__sections');
   let html = null;

   if (submissionType) {
      submissionType.addEventListener('change', ev => {
         const typeValue = ev.target.value;

         if (typeValue === 'Band') {
            html = getBandSectionHtml() + getSubmitBtnHtml();
            container.innerHTML = html;
            setupPastConvergenceQuestion(container);
         }
         else if (typeValue === 'DJ') {
            html = getDjSectionHtml() + getSubmitBtnHtml();
            container.innerHTML = html;
            setupPastConvergenceQuestion(container);
         }
         else if (typeValue === 'Talent') {
            html = getTalentSectionHtml() + getSubmitBtnHtml();
            container.innerHTML = html;
            setupPastConvergenceQuestion(container);
         }
         else {
            container.innerHTML = '';
         }
      });
   }
}

export const init = () => {
   const submissionForm = document.getElementById('submission-form');

   if (submissionForm) {
      setupForm(submissionForm);
   }
};

export default init;
